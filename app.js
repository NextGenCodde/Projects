

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


  let point = document.createElement("div")
        point.setAttribute("class", "point")
        document.body.append(point)
        point.style.display = "none"
        window.addEventListener("mousemove", function (e) {
            let x_axis = e.clientX;
            let y_axis = e.clientY;
            point.style.display = "block"
            point.style.top = `${y_axis + 10}px`
            point.style.left = `${x_axis + 10}px`
        })
