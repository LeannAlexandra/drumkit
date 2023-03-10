let drums = document.getElementsByClassName('drum'); //array of drums. index == drum
let crashSound = new Audio('sounds/crash.mp3');
let kickSound = new Audio('sounds/kick-bass.mp3');
let snareSound = new Audio('sounds/snare.mp3');
let tom1Sound = new Audio('sounds/tom-1.mp3');
let tom2Sound = new Audio('sounds/tom-2.mp3');
let tom3Sound = new Audio('sounds/tom-3.mp3');
let tom4Sound = new Audio('sounds/tom-4.mp3');

//add click event to every button with drum class.
for (let d of drums) {
    d.addEventListener("click", handleClick);
}
//ad key listener to the whole document.
document.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
    playThisSound(event.key);
}

function handleClick(event) {
    playThisSound(this.innerHTML);
}


function playThisSound(s) {
    let actButton = document.querySelector(`.${s}`);
    if (actButton != null) {
        actButton.classList.add("pressed");
        setTimeout(function () { actButton.classList.remove("pressed"); }, 200);
    }
    switch (s) {
        case 'w':
            const w = tom1Sound.cloneNode();
            w.play();
            break;
        case 'a':
            //tom2Sound.play();
            const a = tom2Sound.cloneNode();
            a.play();
            break;
        case 's':
            // tom3Sound.play();
            const s = tom3Sound.cloneNode();
            s.play();
            break;
        case 'd':
            //tom4Sound.play();
            const d = tom4Sound.cloneNode();
            d.play();
            break;
        case 'j':
            // snareSound.play();
            const j = snareSound.cloneNode();
            j.play();
            break;
        case 'k':
            // crashSound.play();
            const k = crashSound.cloneNode();
            k.play();
            break;
        case 'l':
            // kickSound.play();
            const l = kickSound.cloneNode();
            l.play();
            break;
        default: break;

    }
}
