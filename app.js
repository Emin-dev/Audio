window.addEventListener('load', yuklendi());


function yuklendi() {
    let songs = ["mp3/1.mp3", "mp3/2.mp3", "mp3/3.mp3", "mp3/4.mp3"]
    let names = ["Inspiring Background ", "Happy Background ", "Fun Hip Hop ", "Cool Lofi Hip Hop "]
    let song = new Audio();
    let currentSong = 0
    song.src = songs[currentSong]

    let list = document.querySelector("ul");
    function myid() {
        currentSong = this.id - 1;
        song.src = songs[currentSong]
        song.play()
        btn.className = `fad fa-pause-circle`;
        name.innerText = names[currentSong]
    }
    for (i = 0; i <= list.childElementCount - 1; i++) {
        list.children[i].addEventListener("click", myid);
    }
//   
    let name = document.querySelector('p')
    let btn = document.querySelector('#playSound');
    btn.addEventListener('click', function () {
        if (song.paused) {
            song.play()
            btn.className = `fad fa-pause-circle`;
            name.innerText = names[currentSong]


        }
        else {
            song.pause()
            btn.className = `fad fa-play-circle`
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
        btn.className = `fad fa-pause-circle`
        name.innerText = names[currentSong]
    });

    let prevSound = document.querySelector('#prevSound');
    prevSound.addEventListener('click', function () {
        currentSong--
        if (currentSong < 0) {
            currentSong = 3
        }
        song.src = songs[currentSong]
        song.play()
        btn.className = `fad fa-pause-circle`
        name.innerText = names[currentSong]
    });


}




