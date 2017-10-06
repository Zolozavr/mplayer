const music = [
    'http://www.danosongs.com/music/danosongs.com-sunspark.mp3',
    'http://www.danosongs.com/music/danosongs.com-junk-ship-gold.mp3',
    'http://www.danosongs.com/music/danosongs.com-artofgardens-intsr.mp3',
    'http://www.danosongs.com/music/danosongs.com-forgive-me-great-spirit.mp3',
    'http://www.danosongs.com/music/danosongs.com-the-world-at-large.mp3'

];


let playListPlayer = document.querySelector('#player audio');

function mplayer() {

    let currentTrack = 0;

    function next() {
        if (currentTrack = music.length - 1) {
            currentTrack = 0;
        }
        else {
            currentTrack++
        }


    }

    if (playListPlayer === null) {
        throw "Player does not exist"
    }
    else {
        playListPlayer.src = music[currentTrack];
        playListPlayer.addEventListener('ended', next, false);

    }


}

mplayer();

function playlist() {

    let plst = document.querySelector('#playlist');

    let ul = document.createElement('ul');
    plst.appendChild(ul);

    music.forEach(song => {
        let li = document.createElement('li');
        let a = document.createElement('a');

        a.setAttribute('href', song);
        a.setAttribute('class', 'song')
        a.appendChild(document.createTextNode(song.replace("http://www.danosongs.com/music/danosongs.com-", "").replace(".mp3", "")));
        ul.appendChild(li);
        li.appendChild(a);


    });

    let classname = document.getElementsByClassName("song");
    Array.from(classname).forEach(function (element) {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            playListPlayer.src = e.target.href;
            playListPlayer.play();
        });
    });


}

playlist();