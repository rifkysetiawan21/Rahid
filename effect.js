// AUTO PLAY MUSIK SAAT HALAMAN DIBUKA (dengan fade-in)
window.addEventListener("load", () => {
  const music = document.getElementById("music");
  if (!music) return;

  music.volume = 0;

  music.play()
    .then(() => {
      setTimeout(() => {
        music.muted = false;
        let vol = 0;
        const fade = setInterval(() => {
          vol += 0.05;
          if (vol >= 1) {
            music.volume = 1;
            clearInterval(fade);
          } else {
            music.volume = vol;
          }
        }, 120);
      }, 800);
    })
    .catch(() => {
      document.addEventListener("click", () => {
        music.muted = false;
        music.volume = 1;
        music.play();
      }, { once: true });
    });
});
