<script>
  const musicBtn = document.getElementById("music-toggle");
  const musicAudio = document.getElementById("bg-music");
  let isPlaying = false;

  function bukaUndangan() {
    document.getElementById("cover").style.display = "none";
    document.getElementById("undangan").style.display = "block";
    window.scrollTo(0, 0);

    // putar musik saat tombol Buka Undangan ditekan
    musicAudio.play()
      .then(() => {
        isPlaying = true;
        musicBtn.classList.add("playing");
        musicBtn.textContent = "🔊";
      })
      .catch(() => {
        isPlaying = false;
        musicBtn.textContent = "🔇";
      });
  }

  musicBtn.addEventListener("click", function () {
    if (isPlaying) {
      musicAudio.pause();
      musicBtn.classList.remove("playing");
      musicBtn.textContent = "🔇";
    } else {
      musicAudio.play();
      musicBtn.classList.add("playing");
      musicBtn.textContent = "🔊";
    }
    isPlaying = !isPlaying;
  });
</script>