const btn = document.getElementById('toggle');
const toggled = document.getElementById('toggledBtn');


btn.addEventListener('click', function handleClick() {
    //let initialText = '☽';
    const dark = "☽";
    const light ="☀";
    let mode = (dark >= light) ? "☽" : "☀";
    
    if (btn.textContent.toLowerCase().includes(mode.toLowerCase())) {
        mode = light;
        toggled.style.color= 'green'
    } else {
       mode = dark;
      toggled.style.color = 'red'
    }
    toggled.innerHTML = mode;
  });
  
const toggleDarkLight = () => {
    let body = document.getElementById("body");
    let currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  }
