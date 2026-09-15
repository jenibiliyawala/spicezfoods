document.querySelectorAll('.product-info button').forEach((button) => {
  button.addEventListener('click', () => {
    const count = document.querySelector('.bag span');
    count.textContent = Number(count.textContent) + 1;
    button.textContent = '✓';
    button.setAttribute('aria-label', 'Added to cart');
  });
});
