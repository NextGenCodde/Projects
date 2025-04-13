

let main = document.querySelector('main')
let section = document.querySelector('section')
  const toggleBtn = document.getElementById('modeToggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    main.classList.toggle("bg-change")
  for( let i = 0 ; i< section.length; i++){
    section[i].classList.toggle("bg-change")
  }
  });