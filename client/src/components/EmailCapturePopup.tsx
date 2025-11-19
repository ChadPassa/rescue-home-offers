import { useEffect, useRef } from "react";
import { X, Shield, Clock } from "lucide-react";

interface EmailCapturePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailCapturePopup({ isOpen, onClose }: EmailCapturePopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Close when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div 
        ref={popupRef}
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-in zoom-in slide-in-from-bottom-4 duration-300"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            GET YOUR OFFER
          </h2>
          <p className="text-lg text-gray-600">
            Enter your property address to see your instant offer
          </p>
        </div>

        {/* FlowClosePro Address Widget */}
        <div className="mb-6">
          <div className="ilist-content"></div>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-6 text-sm text-gray-500 pt-4 border-t">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#c9a961]" />
            <span>100% Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#c9a961]" />
            <span>2-Minute Process</span>
          </div>
        </div>
      </div>
    </div>
  );
}

