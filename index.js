const autoType = document.querySelector('.auto-type');

let typed = new Typed('.auto-type', {
  strings: [
    'a software engineer.',
    'also an AWS cloud enthusiast.',
    'a visual artist (when the muses call), a sci-fi lover and green house owner.',
  ],
  typeSpeed: 80,
  backSpeed: 5,
  loop: true,
});
