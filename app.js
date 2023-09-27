console.log("mert")
let language=["Aşk","Amore","Láska","Liefde",
"Love", "Armastus","Amour", "Liebe","Αγάπη",
"Aloha","Cinta","Kärlek", "प्यार","Любовь", "ভালবাসা","Amor",
"사랑"]


function word(){
    return language[Math.floor(Math.random()*language.length)];
}

function runTypewriter(){

const text = document.querySelector("#ask");
const strText = word();
const splitText = strText.split("");
text.textContent = "";
for (let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char=0;
let timer=setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer=null;
}
}
//runTypewriter();
setInterval(runTypewriter, 2000)

