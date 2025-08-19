// Typing Animation
const typingText = document.querySelector('.typing-text');
const words = ['Frontend Developer', 'JavaScript Enthusiast', 'UI/UX Explorer'];
let wordIndex = 0;
let charIndex = 0;
let typing = true;

function typeLoop() {
  const currentWord = words[wordIndex];
  if (typing) {
    typingText.textContent = currentWord.slice(0, ++charIndex);
    if (charIndex === currentWord.length) {
      typing = false;
      setTimeout(typeLoop, 1000);
    } else {
      setTimeout(typeLoop, 100);
    }
  } else {
    typingText.textContent = currentWord.slice(0, --charIndex);
    if (charIndex === 0) {
      typing = true;
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(typeLoop, 50);
  }
}
typeLoop();

// Scroll Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate-on-scroll').forEach(section => {
  observer.observe(section);
});
