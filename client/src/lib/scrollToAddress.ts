export function scrollToAddress() {
  const addressSection = document.getElementById('address-widget');
  if (addressSection) {
    addressSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Focus on the address input after scrolling
    setTimeout(() => {
      const addressInput = addressSection.querySelector('input');
      if (addressInput) {
        addressInput.focus();
      }
    }, 500);
  }
}
