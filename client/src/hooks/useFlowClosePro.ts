import { useState, useEffect } from 'react';

/**
 * Custom hook to load FlowClosePro script and ensure it's initialized
 * Based on research from: https://thetshaped.dev/p/loading-third-party-scripts-in-react-the-right-way
 */
export function useFlowClosePro() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector(
      'script[src*="flowclosepro.com"]'
    );

    if (existingScript) {
      // Script already exists, check if it's loaded
      if ((existingScript as HTMLScriptElement).dataset.loaded === 'true') {
        setIsLoaded(true);
        return;
      }

      // Wait for existing script to load
      existingScript.addEventListener('load', () => {
        (existingScript as HTMLScriptElement).dataset.loaded = 'true';
        setIsLoaded(true);
      });

      existingScript.addEventListener('error', (e) => {
        setError(new Error('Failed to load FlowClosePro script'));
      });

      return;
    }

    // Script doesn't exist, create it
    const script = document.createElement('script');
    script.src = 'https://rescuehomeoffers.flowclosepro.com/scripts/falcon/auto-web.js?v=2.01';
    script.async = true;
    script.defer = true;

    script.onload = () => {
      script.dataset.loaded = 'true';
      setIsLoaded(true);
      
      // Give FlowClosePro a moment to initialize
      setTimeout(() => {
        // Trigger initialization on all .ilist-content divs
        const event = new Event('DOMContentLoaded', { bubbles: true });
        document.dispatchEvent(event);
      }, 100);
    };

    script.onerror = () => {
      setError(new Error('Failed to load FlowClosePro script'));
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup if component unmounts before script loads
      if (script && !script.dataset.loaded) {
        script.remove();
      }
    };
  }, []);

  return { isLoaded, error };
}
