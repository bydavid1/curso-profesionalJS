import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector("video")
const togglePlay = document.getElementById("tooglePlay")
const toggleMute = document.getElementById("toogleMute")

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
