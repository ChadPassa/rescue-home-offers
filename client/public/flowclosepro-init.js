// FlowClosePro Script Loader
// This loads the FlowClosePro script after the page is ready
(function() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFlowClosePro);
  } else {
    loadFlowClosePro();
  }
  
  function loadFlowClosePro() {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://chad.flowclosepro.com/scripts/falcon/auto-web.js?v=2.01';
    script.async = true;
    
    // Append to body
    document.body.appendChild(script);
    
    console.log('FlowClosePro script loaded');
  }
})();
