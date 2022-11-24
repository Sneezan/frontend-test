const btn = document.getElementById('toggle-btn');

function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  }

  btn.addEventListener('click', function handleClick() {
    const initialText = '☽';
  
    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
      btn.textContent = '☀';
    } else {
      btn.textContent = initialText;
    }
  });
  