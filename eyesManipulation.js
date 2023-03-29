function otworzOko(id) {
    const div = document.querySelector(id);
    let height = 0;
    let topMargin = div.offsetHeight / 2;
    let bottomMargin = div.offsetHeight / 2;
    const interval = setInterval(() => {
      height += 10;
      topMargin -= 5;
      bottomMargin -= 5;
      div.style.height = height + "px";
      div.style.marginTop = topMargin + "px";
      div.style.marginBottom = bottomMargin + "px";
      if (height >= div.offsetHeight) {
        clearInterval(interval);
      }
    }, 10);
  }
function mrugnij(id) {
    const div = document.getElementById(id);
    let height = div.offsetHeight;
    let topMargin = 0;
    let bottomMargin = 0;
    const interval = setInterval(() => {
      height -= 10;
      topMargin += 5;
      bottomMargin += 5;
      div.style.height = height + "px";
      div.style.marginTop = topMargin + "px";
      div.style.marginBottom = bottomMargin + "px";
      if (height <= 0) {
        clearInterval(interval);
      }
    }, 10);
    otworzOko("#container");
  }