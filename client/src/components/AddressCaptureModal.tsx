import { X } from "lucide-react";
import { useEffect } from "react";

interface AddressCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddressCaptureModal({ isOpen, onClose }: AddressCaptureModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Initialize FlowClosePro widget when modal opens
  useEffect(() => {
    if (isOpen) {
      // Wait for modal to render, then trigger FlowClosePro initialization
      const timer = setTimeout(() => {
        // Check if FlowClosePro script has loaded
        if (typeof window !== 'undefined' && (window as any).initFlowClose) {
          (window as any).initFlowClose();
        } else {
          // If FlowClosePro doesn't have an init function, reload the script
          const script = document.createElement('script');
          script.src = 'https://rescuehomeoffers.flowclosepro.com/scripts/falcon/auto-address.js?v=2.01&t=' + Date.now();
          script.async = true;
          document.body.appendChild(script);
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-in fade-in zoom-in duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="space-y-6">
          {/* Heading */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">
              GET YOUR OFFER
            </h2>
            <p className="text-gray-600">
              Enter your property address to see your instant offer
            </p>
          </div>

          {/* FlowClosePro Address Widget */}
          <div className="space-y-4">
            <form id="address-form" onSubmit={(e) => e.preventDefault()}>
              <div className="ilist-content"></div>
            </form>
            
            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>2-Minute Process</span>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500 uppercase tracking-wide">
            <span>✓ No Obligation</span>
            <span>✓ No Pressure</span>
            <span>✓ No Fees</span>
          </div>
        </div>
      </div>
    </div>
  );
}
