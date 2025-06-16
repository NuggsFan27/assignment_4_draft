document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', e => {
    e.preventDefault();                       // 1. stop the network request

    const name = form.name.value.trim();
    alert(`Thanks${name ? ', ' + name : ''}! Your message is on its way.`); // 2. feedback

    form.reset();                             // 3. clear every field
  });
});
