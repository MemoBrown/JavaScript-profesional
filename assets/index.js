import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector("video");
const play = document.getElementById("btn-play");
const pause = document.getElementById("btn-pause");
const mute =document.getElementById("btn-mute");

const player = new MediaPlayer({ 
    el: video, 
    plugins: [new AutoPlay(), new AutoPause()], 
});


play.onclick = () => player.play();
pause.onclick = () => player.pause();
mute.onclick = () => player.toggleMuted();