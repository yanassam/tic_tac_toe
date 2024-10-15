export const playSoundWithTimeout = (audio, duration) => {
  audio.play();

  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, duration);
};
