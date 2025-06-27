// Animasi Mengetik
const text = `guess whattt dayy it iss todayy?? yapp harii inii ayangg akuu ulangg tahunnn yangg kee 17, happyy birthdayy sayanggg💐🥳🥳. ndaaa kerasaa yaaaa, sekaranggg nanaa usianyaa udahh 17 tahunn ajaaa udahh makinn dewasaa. hendraa harappp dengann bertambahnyaa usiamuu, semakinn sempurnaa imannya, rajinn ibadahnyaa🕌, selaluu diberii kesehatann, panjangg umurr, berbaktii teruss kepadaa orangg tuaa, dann citaa-citaa yangg nanaa impikann bisa terwujud dan dimudahkan dalamm segalaa urusann. Aamiin🤲🏻.\n \n semangattt teruss yaa sayangg buatt ngejarrr semuaa keinginann ayangg, kamuu pastii bisaa sayangg, jangann takutt gagall yaa sayanggg, hendraa selaluu dukungg kamuu dann supportt kamuu sayangg💪❤️. semangat teruss yaa sayangg orangg tuamuu dann akuu selaluu adaa disampingmuu, selaluu rendahh hatii, jadii anakk yangg baiik yaa sayangg, selaluu sayangg samaa keluargaa yaaa🥰, jangann lupaa selaluu bersyukurr yaa nanaaa, mudahh-mudahhann yangg nanaa lakukann harii inii dann harii selanjutnyaa selaluu diberii kelancarann dann keselamatann, Aamiin🤲🏻.\n \n maaff yaa nanaa kalauu hendraa belumm bisaa jadii yangg nanaa mauuuu, maaff yaa kalauu hendraa masihh banyakk kurangnyaa, maaff yaa nanaa kalauu hendraa seringg banyakk salahh meskipunn ituu disengajaa atauu ndaa disengajaa dann hendraaa tauu, kamuu pastii marahh. hendraa akann memperbaikii kesalahann-kesalahann yangg udahh hendraa buatt dann akann menjadii lebihh baikk lagii, kamuu haruss tauu sayangg kamuu ituu sosokk yangg sangatt sempurnaa dimatakuuu, akuu merasaa sempurnaa jikaa kamuu beradaa disampingkuu🥰❤.\n \n i feel likee thee luckyy personn becausee i cann havee you and be loved be youu, fallingg in lovee withh youu makess mee happpp, thanks you for beingg theree and giving me endless happiness, stayy withh mee and continuee to process with me, lovee youu todayy, tomorrow and foreverr❤❤.\n \n HAPPY SWEET SEVENTEEN OHH MY DARLINGGG🥳🥳💐`;

let index = 0;
const speed = 50;

function typeText() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  }
}

window.onload = typeText;

// Fungsi toggle menu
document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("show");
});

