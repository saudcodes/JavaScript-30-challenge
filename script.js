


let playMusic = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return;
    audio.currentTime = 1
    console.log(audio)
    key.classList.add("playing")
    audio.play()
}

let removetransition = (e) => {
    if (e.propertyName != "transform") return;
    this.remove.classList("playing")
    console.log("true")
}
let keys = document.querySelectorall(".key")
keys.forEach(key => key.addEventListener("transitionend", removetransition));
window.addEventListener("keydown", playMusic

)