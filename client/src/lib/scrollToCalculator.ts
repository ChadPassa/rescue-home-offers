export const scrollToCalculator = () => {
  const calculatorElement = document.getElementById('calculator');
  if (calculatorElement) {
    // Calculator exists on current page, scroll to it
    calculatorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    // Calculator doesn't exist, navigate to homepage with hash
    window.location.href = '/#calculator';
  }
};
