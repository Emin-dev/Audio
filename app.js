window.addEventListener('load', yuklendi());


function yuklendi() {
    //  let ses = document.querySelector('#player');
    let ses = new Audio();

    ses.src="mp3/1.pm3"




    let btn = document.querySelector('#playSound');
    btn.addEventListener('click', function () {
        ses.play();
    });
    let pauseBtn = document.querySelector('#pauseSound');
    pauseBtn.addEventListener('click', function () {
        ses.pause();
    });
}