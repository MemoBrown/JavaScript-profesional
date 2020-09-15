import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads'

const video = document.querySelector("video");
const play = document.getElementById("btn-play");
const pause = document.getElementById("btn-pause");
const mute =document.getElementById("btn-mute");

const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});


play.onclick = () => player.play();
pause.onclick = () => player.pause();
mute.onclick = () => player.toggleMuted();

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}