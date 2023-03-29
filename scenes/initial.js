const initialScene = `<div id="lewy">
<div
    class="dialogelse"
    onclick="openDialogWindow()"
    data-options="&lt;Wsiądź&gt;,Gdzie ja jestem?"
>
    Co tak stoisz, amigo? Wsiadaj.
</div>
</div>
<div id="prawy">
<div id="prawyprawy">
    <div class="bron item"></div>

    <div class="lewa item"></div>
</div>
<div id="postac"></div>
<div id="prawylewy">
    <div class="plecak item" onclick="openBackpack()"></div>

    <div class="prawa item"></div>
</div>
<div style="clear: both"></div>
<div id="prawydol">
    <div class="dialog" onclick="intro()">&lt;Wsiądź&gt;</div>
    <div class="dialog" onclick='whereAmI("W dupie a gdzie? hah Witamy w koloni, nie świruj danny, wbijaj do środka")'>Gdzie ja jestem?</div>
    <div class="dialog" onclick="startScene(), ruszanieTlem()">No to dawaj</div>
</div>
</div>`;

const startGame =  `<div id="container">
<div id="background">
  
</div>
<div id="content">
  <!-- zawartość diva -->
  <div id="clickable-elementChinol"></div>
  <div id="clickable-elementLeftCar" onclick="carFirst()"></div>
</div>
</div>
<div id="container2">
<div id="background2"></div>
<div id="content2">
  <!-- zawartość diva 2 -->
  <div id="clickable-elementRightCar" onclick="carFirst()"></div>
  <div id="clickable-elementRightPetrol"></div>
</div>
</div>`

const lewyos = `<div id="lewy">
<div
    class="dialogelse"
    onclick="openDialogWindow()"
    data-options="&lt;Wsiądź&gt;,Gdzie ja jestem?"
>
    Co tak stoisz, amigo? Wsiadaj.
</div>
</div>`
const prawos = `<div id="prawy">
<div id="prawyprawy">
    <div class="bron item"></div>

    <div class="lewa item"></div>
</div>
<div id="postac"></div>
<div id="prawylewy">
    <div class="plecak item" onclick="openBackpack()"></div>

    <div class="prawa item"></div>
</div>
<div style="clear: both"></div>
<div id="prawydol">
    <div class="dialog" onclick="intro()">&lt;Wsiądź&gt;</div>
    <div class="dialog" onclick='whereAmI("W dupie a gdzie? hah Witamy w koloni, nie świruj danny, wbijaj do środka")'>Gdzie ja jestem?</div>
    <div class="dialog" onclick="startScene(), ruszanieTlem()">No to dawaj</div>
</div>
</div>`

const calos = lewyos + prawos;

/*initialScene = () => {
    let init = "";
    init = generateAmigo()
    return init;
}
*/
const generateLewy = (onclick,dataOption,content) => {
    let lewyContent = `<div id="lewy">
<div
    class="dialogelse"
    onclick="${onclick}()"
    data-options="${dataOption}"
>
    ${content}
</div>
</div>` 
    
    return lewyContent;
}

const generatePrawy = (onclick, divContent) => {
    let prawydol = ``;
    let prawyContent = `<div id="prawy">
<div id="prawyprawy">
    <div class="bron item"></div>

    <div class="lewa item"></div>
</div>
<div id="postac"></div>
<div id="prawylewy">
    <div class="plecak item" onclick="openBackpack()"></div>

    <div class="prawa item"></div>
</div>
<div style="clear: both"></div>
<div id="prawydol">`
    for(let i=0; i<divContent.length; i++){
        prawydol += `<div class="dialog" onclick="${onclick[i]}()">${divContent[i]}</div>`
    }
    prawyContent = prawyContent + prawydol + `</div>
    </div>`
    

    return prawyContent;
}
let probaScene = generateLewy(
    "dupa",
    "sraka",
    "fiut"
    ) + generatePrawy(
    ["dupa1",
    "dupa2",
    "dupa(),dupa"],
    ["siema",
    "tutaj"
    ]
    )

//drawScene(initialScene());