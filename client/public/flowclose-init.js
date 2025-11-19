// FlowClosePro Widget Initialization and Enhancement
(function() {
  'use strict';
  
  // Wait for DOM and FlowClosePro script to load
  function initFlowClose() {
    // Add flow attribute to all ilist-content divs
    const containers = document.querySelectorAll('.ilist-content');
    containers.forEach(container => {
      if (!container.hasAttribute('flow')) {
        container.setAttribute('flow', 'cashoffer');
      }
    });
    
    // Style the submit button when it appears
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            // Check if it's a button or contains a button
            const buttons = node.matches && node.matches('button, input[type="submit"]') 
              ? [node] 
              : node.querySelectorAll ? node.querySelectorAll('button, input[type="submit"]') 
              : [];
            
            buttons.forEach(btn => {
              if (btn.classList && (
                btn.classList.contains('ilist-submit-button') || 
                btn.classList.contains('ilist-button') ||
                btn.closest('.ilist-content')
              )) {
                // Apply custom styling
                btn.style.display = 'block';
                btn.style.width = '100%';
                btn.style.marginTop = '0.75rem';
                btn.classList.add('flowclose-submit-btn');
              }
            });
          }
        });
      });
    });
    
    // Observe all ilist-content containers
    containers.forEach(container => {
      observer.observe(container, {
        childList: true,
        subtree: true
      });
    });
    
    console.log('FlowClosePro initialization complete');
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFlowClose);
  } else {
    initFlowClose();
  }
  
  // Re-initialize after a delay to catch late-loading scripts
  setTimeout(initFlowClose, 1000);
  setTimeout(initFlowClose, 3000);
})();
