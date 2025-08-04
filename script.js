document.getElementById("nextBtn").addEventListener("click", () => {
  const landing = document.getElementById("landing");
  const main = document.getElementById("mainContent");
  const audio = document.getElementById("bgMusic");

  // Show main content
  landing.style.display = "none";
  main.classList.remove("hidden");
  setTimeout(() => {
    main.classList.add("visible");
  }, 100); // delay for transition

  // Fade in audio volume
  audio.volume = 0;
  audio.play();

  let volume = 0;
  const fadeIn = setInterval(() => {
    if (volume < 1) {
      volume += 0.01;
      audio.volume = volume;
    } else {
      clearInterval(fadeIn);
    }
  }, 100); // 0.01 every 100ms = 10s fade in
});