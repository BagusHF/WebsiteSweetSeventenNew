document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("show");
});

  const text = "Semoga di hari istimewa ini kamu diberikan kebahagiaan, banyak rezeki, dan sehat selalu 💖";
  const typingText = document.getElementById("typing-text");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      typingText.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 60); // kecepatan mengetik (ms)
    }
  }

  typeWriter();
