import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'

const video: HTMLVideoElement = document.querySelector("video")
const togglePlay: HTMLElement = document.getElementById("tooglePlay")
const toggleMute: HTMLElement = document.getElementById("toogleMute")

const player = new MediaPlayer({el: video, plugins : [
    new AutoPlay(),
    new AutoPause()
]})

togglePlay.onclick = () => player.togglePlay()
toggleMute.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}
