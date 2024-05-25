const pianokeys = document.querySelectorAll(".piano-keys .key");
// console.log(pianokeys);
const volumeslider = document.querySelector(".volume-slider input");
const keyscheckbox = document.querySelector(".keys-checkbox input");

let allkeys = [],
    audio = new Audio("tunes/a.wav");
const playtune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedkey = document.querySelector(`[data-key="${key}"]`);
    clickedkey.classList.add("active");
    setTimeout(() => {
        clickedkey.classList.remove("active");
    }, 150);
}
pianokeys.forEach((key) => {
    allkeys.push(key.dataset.key);
    key.addEventListener("click", () => playtune(key.dataset.key))
});


const pressdkey = (e) => {
    if (allkeys.includes(e.key)) playtune(e.key);
}
const handlevolume = (e) => {
    audio.volume = e.target.value;
}

const showhidekeys = () => {
    pianokeys.forEach(key => key.classList.toggle("hide"));
}



keyscheckbox.addEventListener("click", showhidekeys);
volumeslider.addEventListener("input", handlevolume);
document.addEventListener("keydown", pressdkey);