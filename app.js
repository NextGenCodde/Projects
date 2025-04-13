

let main = document.querySelector('main')
  const toggleBtn = document.getElementById('modeToggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    main.classList.toggle("bg-change")
  });