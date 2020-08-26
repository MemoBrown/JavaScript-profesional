import MediaPlayer from './MediaPlayer.js'

const video = document.querySelector("video");
const play = document.getElementById("btn-play");
const pause = document.getElementById("btn-pause");

const player = new MediaPlayer({ el: video });
play.onclick = () => player.play();
pause.onclick = () => player.pause();
