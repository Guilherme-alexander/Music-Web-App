const title = document.querySelector('#nome_musica');
const music = document.querySelector('#nome_autor');
const prev = document.querySelector('.prev');
const PlayPause = document.querySelector('.PlayPause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');

    audio.addEventListener('canplay', play_evento , false);
    audio.addEventListener('timeupdate', atualizar , false);

//create song list

const songList = [

    {path:'som/Xenial-Lost2.mp3',  songNameMusic:'Lost2',
    songName:'Xenial'},

    {path:'som/y2mate.com - Shadows in my room Feat. Vict molina.mp3',  songNameMusic:'Shadows in my room Feat',
    songName:'Vict molina'},

    {path:'som/akon - lonely.mp3', songNameMusic:'loney',songName:'akon'},

    {path:'som/JVKE - Upside Down Buttercup x Hood Baby TikTok Remix.mp3',
     songNameMusic:'Upside Down Buttercup',
     songName:'TikTok Remix'},
    
    {path:'som/30 deep grimeyy -Rockstar.mp3',
     songNameMusic:'30 deep grimeyy',
     songName:'Rockstar'},

    {path:'som/Ellit - Sad and Sober.mp3', 
     songNameMusic:'Sad and Sober',
     songName:'Ellit'},

    {path:'som/Twenty_Carneyval Mashup_TikTok Mashup.mp3',  songNameMusic:'Twenty_Carneyval',
    songName:'Ellit'},

    {path:'som/Capital Cities  Safe And Sound  TraduoLegendado.mp3',  songNameMusic:'Capital Cities  Safe And Sound',
    songName:'TraduoLegendado'},

    
    
];

let song_Playing = false;

//play song
function playSong(){
    song_Playing = true;
    audio.play();
    document.getElementById("tempo_atual").style.color = "#0099ff";
    document.getElementById("tempo_total").style.color = "#0099ff";
    PlayPause.innerHTML = '<i class="fa fa-play play-btn" aria-hidden="true"></i>'
}
//pause song
function pauseSong(){
    song_Playing = false;
    audio.pause();
    document.getElementById("tempo_atual").style.color = "#797d7f";
    document.getElementById("tempo_total").style.color = "#797d7f";
    PlayPause.innerHTML = '<i class="fa fa-pause play-btn" aria-hidden="true"></i>'
}

//player or pause song on click

PlayPause.addEventListener('click', () => (song_Playing ?
pauseSong() : playSong()));

//load song
function loadSong(songList){
    title.textContent = songList.songName;
    music.textContent = songList.songNameMusic;
    audio.src = songList.path;
}

//current song
let i = 0;

//on load - select first song form song list
loadSong(songList[i]);

//prev song
function prevSong(){
    i--;
    if(i < 0){
        i = songList.length - 1;
    }
    loadSong(songList[i]);
    playSong();
}
prev.addEventListener("click", prevSong);

//next song
function nextSong(){
    i++;
    if(i > songList.length - 1){
        i = 0;
    }
    loadSong(songList[i]);
    playSong();
}
next.addEventListener("click", nextSong);



function aumentar_volume(){
    if( audio.volume < 1)  audio.volume += 0.1;
}

function diminuir_volume(){
    if( audio.volume > 0)  audio.volume -= 0.1;
}

function mute(){
    if( audio.muted ){
        audio.muted = false;
    }else{
        audio.muted = true;
    }
}
function play_evento(){
    document.getElementById('tempo_atual').innerHTML = secToStr( audio.currentTime) ;
    document.getElementById('tempo_total').innerHTML = secToStr( audio.duration );
    document.getElementById('barra_progresso').max = audio.duration;
    document.getElementById('barra_progresso').value = audio.currentTime;
}

function atualizar(){
    document.getElementById('tempo_atual').innerHTML = secToStr( audio.currentTime);
    document.getElementById('barra_progresso').value = audio.currentTime;
}

function secToStr( sec_num ) {
    sec_num = Math.floor( sec_num );
    var horas   = Math.floor(sec_num / 3600);
    var minutos = Math.floor((sec_num - (horas * 3600)) / 60);
    var segundos = sec_num - (horas * 3600) - (minutos * 60);

    if (horas   < 10) {horas   = "0"+horas;}
    if (minutos < 10) {minutos = "0"+minutos;}
    if (segundos < 10) {segundos = "0"+segundos;}
    var tempo    = horas+':'+minutos+':'+segundos;
    return tempo;
}
