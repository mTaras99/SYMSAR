function openBackpack() {
    const prawydol = document.querySelector("#prawydol");
    prawydol.innerHTML = "";
    for (let i = 0; i < 4; i++) {
        const div = document.createElement("div");
        div.className = "plecakitem";
        prawydol.appendChild(div);
    }
}

function openDialogWindow() {
    let dialogs = document.querySelectorAll(".dialogelse");
    dialogs.forEach((dialog) => {
        dialog.addEventListener("click", function () {
            const options = this.getAttribute("data-options");
            const prawydol = document.querySelector("#prawydol");
            prawydol.innerHTML = "";
            if (options) {
                const optionList = options.split(",");

                optionList.forEach((option) => {
                    const div = document.createElement("div");
                    div.className = "dialog";
                    div.setAttribute("data-options", option);
                    div.setAttribute("onclick", dialogOptions[option]);
                    div.innerText = option;
                    prawydol.appendChild(div);
                });
            }
        });
    });
}

function animateDivs() {
    const leftDiv = document.querySelector("#lewy");

    // Ustaw wartości początkowe marginesów
    leftDiv.style.marginLeft = "3vw";
    leftDiv.style.marginRight = "0vw";

    // Po 4 sekundach zmień marginesy na 4vw i 0vw

    // Płynnie zwiększy marginesy pomiędzy dwoma divami do 2vw i 2vw
    setTimeout(() => {
        const intervalId = setInterval(() => {
            const leftMargin = parseFloat(leftDiv.style.marginLeft) || 0;
            const rightMargin = parseFloat(leftDiv.style.marginRight) || 0;

            // Jeśli marginesy osiągnęły swoje wartości docelowe, zatrzymaj funkcję setInterval
            if (leftMargin <= 2 && rightMargin >= 2) {
                clearInterval(intervalId);
            } else {
                leftDiv.style.marginLeft = `${Math.max(
                    leftMargin - 0.025,
                    2
                )}vw`;
                leftDiv.style.marginRight = `${Math.min(
                    rightMargin + 0.05,
                    2
                )}vw`;
            }
        }, 50);
    }, 1000);
}
function ruszanieTlem(){
    const container = document.getElementById('container');
    const background = document.getElementById('background');
    let isMouseDown = false;
    let startX;
    let scrollLeft;
    const container2 = document.getElementById('container2');
    const background2 = document.getElementById('background2');
    let isMouseDown2 = false;
    let startX2;
    let scrollLeft2;
  
    container2.addEventListener('mousedown', (e) => {
      isMouseDown2 = true;
      startX2 = e.pageX - container2.offsetLeft;
      scrollLeft2 = container2.scrollLeft;
      container.scrollLeft = container2.scrollLeft;
    });
  
    container2.addEventListener('mouseleave', () => {
      isMouseDown2 = false;
    });
  
    container2.addEventListener('mouseup', () => {
      isMouseDown2 = false;
    });
  
    container2.addEventListener('mousemove', (e) => {
      if (!isMouseDown2) return;
      e.preventDefault();
      const x = e.pageX - container2.offsetLeft;
      const walk = (x - startX2) * 3;
    //RESPONSYWNOŚĆ DO ZROBIENIA!!!
      let newScrollLeft2 = Math.max(0, Math.min(scrollLeft2 - walk, 840));
    //RESPONSYWNOŚĆ DO ZROBIENIA!!!
      container2.scrollLeft = newScrollLeft2;
      container.scrollLeft = container2.scrollLeft;
      console.log("kuuuutas")
    });
  
    container.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });
  
    container.addEventListener('mouseleave', () => {
      isMouseDown = false;
    });
  
    container.addEventListener('mouseup', () => {
      isMouseDown = false;
    });
  
    container.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 3;
      let newScrollLeft = Math.min(scrollLeft - walk, background2.offsetWidth);
      if (newScrollLeft > 840) {
        newScrollLeft = 840;
      }
      container.scrollLeft = newScrollLeft;
      container2.scrollLeft = container.scrollLeft;
    });
  
    const clickableElementLeftCar = document.getElementById('clickable-elementLeftCar');
  
    clickableElementLeftCar.addEventListener('click', (event) => {
      const bounds = clickableElementLeftCar.getBoundingClientRect();
      if (event.clientX >= bounds.left && event.clientX <= bounds.right &&
          event.clientY >= bounds.top && event.clientY <= bounds.bottom) {
        // kliknięcie wewnątrz granic elementu
        console.log('kliknięto w Samochod');
        root.innerHTML = initialScene;
      } else {
        console.log('kliknięto w tło');
      }
    });
  
    const clickableElementChinol = document.getElementById('clickable-elementChinol');
  
    clickableElementChinol.addEventListener('click', (event) => {
      const bounds = clickableElementChinol.getBoundingClientRect();
      if (event.clientX >= bounds.left && event.clientX <= bounds.right &&
          event.clientY >= bounds.top && event.clientY <= bounds.bottom) {
        // kliknięcie wewnątrz granic elementu
        console.log('kliknięto w Chinola');
      } else {
        console.log('kliknięto w tło');
      }
    });
  
    const clickableElementRightCar = document.getElementById('clickable-elementRightCar');
  
    clickableElementRightCar.addEventListener('click', (event) => {
      const bounds = clickableElementRightCar.getBoundingClientRect();
      if (event.clientX >= bounds.left && event.clientX <= bounds.right &&
          event.clientY >= bounds.top && event.clientY <= bounds.bottom) {
        // kliknięcie wewnątrz granic elementu
        console.log('kliknięto w Samochod');
      } else {
        console.log('kliknięto w tło');
      }
    });
  
    const clickableElementRightPetrol = document.getElementById('clickable-elementRightPetrol');
  
    clickableElementRightPetrol.addEventListener('click', (event) => {
      const bounds = clickableElementRightPetrol.getBoundingClientRect();
      if (event.clientX >= bounds.left && event.clientX <= bounds.right &&
          event.clientY >= bounds.top && event.clientY <= bounds.bottom) {
        // kliknięcie wewnątrz granic elementu
        console.log('kliknięto w Petrol Station');
      } else {
        console.log('kliknięto w tło');
      }
    });
  }