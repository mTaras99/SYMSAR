
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

