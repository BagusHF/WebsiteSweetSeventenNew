document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("show");
});

//Animasi teks class kotak-teks
const teks = "kotakk inii adalahh bentukk terimaa kasihh hendraa terhadap nanaaa, karena nanaaa udahh mauu menerimaa kehadiran hendraa🥰.";
const container = document.querySelector(".typewriter");
let i = 0;

function typeText() {
    if (i < teks.length) {
        container.innerHTML += teks.charAt(i);
        i++;
        setTimeout(typeText, 60);
        //kecepatan mengetik (100ms per karakter)
    }
}
typeText(); 

const messages = [
    "nanaaaa, kamuu ituu bukan cumaa sekedarr pacarr hendraa... tetapii kamuu ituu adalahh sumberr semangatnyaa hendraa setiapp harii💕",
    "makasihh yaa nanaa udahhh supportt hendraa teruss waktuu hendraaa mengalamii kesulitann🫶",
    "terimaa kasihh yaa nanaa, karenaa kamuu udahh mauu dengerinn ceritaa-ceritaa hendraa🤗",
    "hendraaa ituu bersyukurr bangett punyaa kamuu. kamuuu ituu isimewaaa dann spesialll🌟",
    "terimaaa kasihh yaa nanaa udahh sabarr menghadapii sikapp-siapp hendraa✨",
    "makasihhh yaa nanaaa udahh memberikann rasaa yangg nyamann bangett, sampaiii hendraa ndaaa tertarikk samaa ceweee lainn lagii💌",
    "hendraa bangga bangett punyaa ceweee sebaikkk kamuu, makasihhh yaa sayanggg💖",
    "terimaa kasihh yaa nanaa udahh mauu menerimaa hendraa, hendraa ndatauu apaa yangg hendraa lakukann sampaii bisaa seberuntunngg inii💌",
    "makasihh yaa nanaa udahh mauu perhatiannn samaaa hendraaa🫶",
    "yangg terakhirrrr, hendraaa sayangg bangett samaa nanaa🥹. sekalii lagii happyy sweett seventenn sayanggg💝🎉"
];

let currentIndex = 0;
let typingInterval;

function typeMessage(text, box) {
    box.innerHTML ="";
    let i = 0;

    typingInterval = setInterval(()=>{
        if (i < text.length){
            if (text[i] === '\n') {
                box.innerHTML += "<br>";
            } else {
                box.innerHTML += text[i];
            }
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 60);
}

function nextMessage() {
    const box = document.getElementById("messageBox");

    if (currentIndex < messages.length) {
      clearInterval(typingInterval);
      typeMessage(messages[currentIndex], box);
      currentIndex++;
    } else {
      box.innerHTML = "🎉semuaa pesann bentukk terimaa kasihh udahh nanaa bukaaa.💌";
    }
}