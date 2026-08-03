document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.topic-card');

  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 90}ms`;
    card.animate(
      [
        { opacity: 0, transform: 'translateY(14px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      {
        duration: 520,
        easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        fill: 'both'
      }
    );
  });
});
