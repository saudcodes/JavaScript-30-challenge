


let playMusic = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return;
    audio.currentTime = 0;
    console.log(audio)
    key.classList.add("playing")
    audio.play()
    console.log(keys)
}

let removetransition = (e) => {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    console.log("true")
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('keyup', removetransition));
window.addEventListener("keydown", playMusic

)

