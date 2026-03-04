document.addEventListener('DOMContentLoaded', () => {
  const badges = document.querySelectorAll('.badge');
  const style = document.createElement('style');
  let keyframes = '';

  badges.forEach((badge, i) => {
    const duration = 5 + Math.random() * 3;
    const delay = i * 0.8;
    const name = `drift-${i}`;

    const x1 = (Math.random() * 10 - 5).toFixed(1);
    const y1 = (Math.random() * 8 - 4).toFixed(1);
    const x2 = (Math.random() * 10 - 5).toFixed(1);
    const y2 = (Math.random() * 8 - 4).toFixed(1);
    const x3 = (Math.random() * 10 - 5).toFixed(1);
    const y3 = (Math.random() * 8 - 4).toFixed(1);

    keyframes += `
      @keyframes ${name} {
        0%, 100% { translate: 0 0; }
        25% { translate: ${x1}px ${y1}px; }
        50% { translate: ${x2}px ${y2}px; }
        75% { translate: ${x3}px ${y3}px; }
      }
    `;

    badge.style.animation = `${name} ${duration}s ${delay}s ease-in-out infinite`;
  });

  style.textContent = keyframes;
  document.head.appendChild(style);

  // Rotating words
  const words = ['the smile?', 'the sincerity?', 'the sympathy?', 'the confidence?', 'the concern?', 'the warmth?', 'the charm?'];
  const el = document.querySelector('.rotating-word');
  let index = 0;

  // Inject word-swap keyframes
  const wordStyle = document.createElement('style');
  wordStyle.textContent = `
    @keyframes word-out {
      from { opacity: 1; transform: translateY(0); }
      to   { opacity: 0; transform: translateY(10px); }
    }
    @keyframes word-in {
      from { opacity: 0; transform: translateY(-10px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(wordStyle);

  function swapWord() {
    el.style.animation = 'word-out 0.3s ease forwards';

    el.addEventListener('animationend', function onOut() {
      el.removeEventListener('animationend', onOut);

      index = (index + 1) % words.length;
      el.textContent = words[index];

      el.style.animation = 'word-in 0.3s ease forwards';
    });
  }

  setInterval(swapWord, 2500);
});
