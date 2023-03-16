const dialogOptions = {
    "<Wsiądź>": "intro()",
    "Gdzie ja jestem?": "whereAmI()",
    "chuj ci w dupe luger": "chujCi()",
};

function intro() {
    const lewy = document.querySelector("#lewy");
    const prawy = document.querySelector("#prawy");
    var music = document.getElementById("background-music");

    // Play music
    music.play();
    music.volume = 0;
    lewy.style.width = "96vw";
    prawy.style.width = "0vw";
    lewy.style.backgroundImage = "url('static/logo.png')";
    lewy.innerHTML = "";
    lewy.style.backgroundSize = "96vw";
    setTimeout(function () {
        lewy.style.width = "47vw";
        prawy.style.width = "47vw";
        lewy.innerHTML = "";
        prawy.innerHTML = "";
        lewy.style.backgroundImage = "url('static/driveprawy.gif')";
        lewy.style.backgroundSize = "cover";
        lewy.style.backgroundPosition = "left";
        lewy.style.float = "left";
        prawy.style.backgroundImage = "url('static/drivelewy.gif')";
        prawy.style.backgroundSize = "cover";
        prawy.style.backgroundPosition = "right";
        prawy.style.float = "left";
        animateDivs();

        setTimeout(function () {
            const dialog = document.createElement("div");
            dialog.classList.add("dialog");
            dialog.innerHTML = "chuj ci w dupe luger";
            dialog.setAttribute("onclick", "intro()");

            lewy.appendChild(dialog);
        }, 7000);
    }, 1800);
}

function whereAmI() {
    const newDialog = document.createElement("div");
    newDialog.classList.add("dialogelse");
    newDialog.setAttribute("data-options", "<Wsiądź>");
    newDialog.setAttribute("onclick", "openDialogWindow()");
    newDialog.innerHTML =
        "W dupie a gdzie? hah Witamy w koloni, nie świruj danny, wbijaj do środka";
    newDialog.style.fontSize = "40px";
    const lewy = document.querySelector("#lewy");
    lewy.style.backgroundImage = "url('static/dupie.png')";

    lewy.removeChild(lewy.querySelector(".dialogelse"));
    lewy.appendChild(newDialog);

    const prawyDol = document.querySelector("#prawydol");
    prawyDol.innerHTML = "";
    const option1 = document.createElement("div");
    option1.classList.add("dialog");
    option1.innerText = "<Wsiądź>";
    option1.setAttribute("onclick", "intro()");
    prawyDol.appendChild(option1);
}
