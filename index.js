const qa = document.querySelectorAll('.qa-Label');

qa.forEach((e) => {
  e.addEventListener('click', () => {
    e.classList.add('active');
  })
})