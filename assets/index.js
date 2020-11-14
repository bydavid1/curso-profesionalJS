import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video")
const togglePlay = document.getElementById("tooglePlay")
const toggleMute = document.getElementById("toogleMute")

const player = new MediaPlayer({el: video, plugins : [
    new AutoPlay()
]})

togglePlay.onclick = () => player.togglePlay()
toggleMute.onclick = () => player.toggleMute()