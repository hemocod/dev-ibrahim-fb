let button  =document.getElementById('music')
let audio= new Audio('./Audio/music.mp3')


button.addEventListener("click",function(){
    toggleAudio();
});
function toggleAudio() {
    if (audio.paused) {
        audio.play();
        music.innerHTML = "Pause";
    } else {
        audio.pause();
        music.innerHTML = "Play";
    }
}
