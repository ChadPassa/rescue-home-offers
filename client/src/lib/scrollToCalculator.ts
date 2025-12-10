export const scrollToCalculator = () => {
  const calculatorElement = document.getElementById('calculator');
  if (calculatorElement) {
    // Calculator exists on current page, scroll to the TOP of it
    const elementTop = calculatorElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementTop - 20; // 20px padding from top
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    // Calculator doesn't exist, navigate to homepage with hash
    window.location.href = '/#calculator';
  }
};
