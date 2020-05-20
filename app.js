window.addEventListener('load', yuklendi());


function yuklendi() {
    let songs = ["mp3/1.mp3", "mp3/2.mp3", "mp3/3.mp3", "mp3/4.mp3"]
    let song = new Audio();
    let currentSong = 0
    song.src = songs[currentSong]




    let btn = document.querySelector('#playSound');
    btn.addEventListener('click', function () {
        if (song.paused) {
            song.play()
            btn.textContent = "Pause"
        }
        else {
            song.pause()
            btn.textContent = "Play"
        }
    });


    let nextSound = document.querySelector('#NextSound');
    nextSound.addEventListener('click', function () {
        currentSong++
        if (currentSong == 4) {
            currentSong = 0
        }
        song.src = songs[currentSong]
        song.play()
    });

    let prevSound = document.querySelector('#prevSound');
    prevSound.addEventListener('click', function () {
        currentSong--
        if (currentSong < 0 ) {
            currentSong = 3
        }
        song.src = songs[currentSong]
        song.play()
    });

   
}