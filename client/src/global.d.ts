// Global type declarations for FlowClosePro modal functions
declare global {
  interface Window {
    openFlowCloseModal?: () => void;
    closeFlowCloseModal?: () => void;
    calculatorData?: {
      solution: string;
      situation: string;
      timeline: string;
      priority: string;
      timestamp: string;
    };
  }
}

export {};
