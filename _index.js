const lewyTrue = document.querySelector("#lewy");
const prawyTrue = document.querySelector("#prawy");
const opcjeDialogowe = {
  "<Wsiądź>": "intro()",
  "Gdzie ja jestem?": "gdzieJestem()",
  "chuj ci w dupe luger": "chujCi()"
  
}
const plecak = document.querySelector(".plecak.item");
  plecak.addEventListener("click", function() {
    const prawydol = document.querySelector("#prawydol");
    prawydol.innerHTML = "";
    for (let i = 0; i < 4; i++) {
      const div = document.createElement("div");
      div.className = "plecakitem";
      prawydol.appendChild(div);
    }
  });
function oknaDialogowe(){
    console.log("kutaass")
    let dialogs = document.querySelectorAll(".dialogelse");
    dialogs.forEach(dialog => {
      dialog.addEventListener("click", function() {
        const options = this.getAttribute("data-options");
        const prawydol = document.querySelector("#prawydol");
        prawydol.innerHTML = "";
        console.log("dupa")
        if (options) {
            const optionList = options.split(",");

            optionList.forEach(option => {
              const div = document.createElement("div");
              div.className = "dialog";
              div.setAttribute("data-options", option);
              div.setAttribute("onclick",opcjeDialogowe[option])
              div.innerText = option;
              prawydol.appendChild(div);
              console.log("cipa")
            });
        }
      });
    });
}

const lewy = document.querySelector("#lewy");
const prawyDol = document.querySelector("#prawydol");

function gdzieJestem(){
    const newDialog = document.createElement("div");
      newDialog.classList.add("dialogelse");
      newDialog.setAttribute("data-options","<Wsiądź>")
      newDialog.setAttribute("onclick", "oknaDialogowe()")
      newDialog.innerHTML = "W dupie a gdzie? hah Witamy w koloni, nie świruj danny, wbijaj do środka";
      newDialog.style.fontSize = "40px";
      const lewy = document.querySelector("#lewy");
      lewy.style.backgroundImage = "url('dupie.png')";

      

      lewy.removeChild(lewy.querySelector(".dialogelse"));
      lewy.appendChild(newDialog);

      prawyDol.innerHTML = "";
      const option1 = document.createElement("div");
      option1.classList.add("dialog");
      option1.innerText = "<Wsiądź>";
      option1.setAttribute("onclick", "intro()");
      prawyDol.appendChild(option1);
}

      


function intro(){
    const lewy = document.querySelector("#lewy");
    const prawy = document.querySelector("#prawy");
    var music = document.getElementById("background-music");

// Play music
music.play();
music.volume = 0;
    lewy.style.width = "96vw";
    prawy.style.width = "0vw";
    lewy.style.backgroundImage = "url('logo.png')"
    lewy.innerHTML = "";
    lewy.style.backgroundSize = "96vw";
    setTimeout(function() {
        lewy.style.width = "47vw";
        prawy.style.width = "47vw";
        lewy.innerHTML = "";
        prawy.innerHTML = "";
        lewy.style.backgroundImage = "url('driveprawy.gif')";
        lewy.style.backgroundSize = "cover";
        lewy.style.backgroundPosition = "left";
        lewy.style.float = "left";
        prawy.style.backgroundImage = "url('drivelewy.gif')";
        prawy.style.backgroundSize = "cover";
        prawy.style.backgroundPosition = "right";
        prawy.style.float = "left";
        animateDivs();
        
        setTimeout(function(){
          
          const dialog = document.createElement("div");
          dialog.classList.add("dialog");
          dialog.innerHTML = "chuj ci w dupe luger";
          dialog.setAttribute("onclick", "intro()");
          
          lewy.appendChild(dialog);
          
        }, 7000)
    }, 1800);
    

}

function animateDivs() {
  const leftDiv = document.querySelector('#lewy');

  // Ustaw wartości początkowe marginesów
  leftDiv.style.marginLeft = '3vw';
  leftDiv.style.marginRight = '0vw';

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
        leftDiv.style.marginLeft = `${Math.max(leftMargin- 0.025, 2)}vw`;
        leftDiv.style.marginRight = `${Math.min(rightMargin + 0.05, 2)}vw`;
      }
    }, 50);
  }, 1000);
}

// Wywołaj funkcję animateDivs()

