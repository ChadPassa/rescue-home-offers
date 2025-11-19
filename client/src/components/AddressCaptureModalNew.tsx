import { useEffect } from 'react';
import { useFlowClosePro } from '../hooks/useFlowClosePro';

interface AddressCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddressCaptureModal({ isOpen, onClose }: AddressCaptureModalProps) {
  const { isLoaded, error } = useFlowClosePro();

  useEffect(() => {
    if (isOpen && isLoaded) {
      // Open the plain HTML modal that has the .ilist-content div
      window.openFlowCloseModal?.();
    }
  }, [isOpen, isLoaded]);

  useEffect(() => {
    if (!isOpen) {
      // Close the plain HTML modal
      window.closeFlowCloseModal?.();
    }
  }, [isOpen]);

  // Handle close from the plain HTML modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (error) {
    console.error('FlowClosePro loading error:', error);
  }

  // This component just controls the plain HTML modal
  // The actual modal HTML is in index.html
  return null;
}

// Extend Window interface to include our global functions
declare global {
  interface Window {
    openFlowCloseModal?: () => void;
    closeFlowCloseModal?: () => void;
  }
}
