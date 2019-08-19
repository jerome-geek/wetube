const videoContainer = document.getElementById('jsVideoPlayer');
const videoPlayer = document.querySelector('#jsVideoPlayer video');
const playBtn = document.getElementById('jsPlayButton');
const volumeBtn = document.getElementById('jsVolumeButton');
const fullScreenBtn = document.getElementById('jsFullScreen');

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    videoPlayer.muted = true;
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

function goFullScreen() {
  if (videoContainer.requestFullscreen) {
    videoContainer.requestFullscreen();
    /* Firefox */
  } else if (videoContainer.mozRequestFullScreen) {
    videoContainer.mozRequestFullScreen();
    /* Chrome, Safari and Opera */
  } else if (videoContainer.webkitRequestFullscreen) {
    videoContainer.webkitRequestFullscreen();
    /* IE/Edge */
  } else if (videoContainer.msRequestFullscreen) {
    videoContainer.msRequestFullscreen();
  }

  fullScreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
  fullScreenBtn.removeEventListener('click', goFullScreen);
  fullScreenBtn.addEventListener('click', exitFullScreen);
}

function exitFullScreen() {
  fullScreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
  fullScreenBtn.addEventListener('click', goFullScreen);

  if (document.exitFullscreen) {
    document.exitFullscreen();
    /* Firefox */
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
    /* Chrome, Safari and Opera */
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
    /* IE/Edge */
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

function init() {
  playBtn.addEventListener('click', handlePlayClick);
  volumeBtn.addEventListener('click', handleVolumeClick);
  fullScreenBtn.addEventListener('click', goFullScreen);
}

if (videoContainer) {
  init();
}
