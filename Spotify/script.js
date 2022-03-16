console.log("Welcome to Spotify");
let songIndex= 0;
let audio= new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem= Array.from(document.getElementsByClassName('songItem'));
let songs= [
    { songName: 'Dangerous', filePath: 'songs\1.mp3' , coverPath: 'https://source.unsplash.com/random/200x200'},
    { songName: 'Beat', filePath: 'songs\2.mp3' , coverPath: 'https://source.unsplash.com/random/201x201'}, 
    { songName: 'High tone', filePath: 'songs\3.mp3' , coverPath: 'https://source.unsplash.com/random/202x202'},
    { songName: 'Something', filePath: 'songs\4.mp3' , coverPath: 'https://source.unsplash.com/random/203x203'},
    { songName: 'Love shape', filePath: 'songs\5.mp3' , coverPath: 'https://source.unsplash.com/random/204x204'},
    { songName: 'Believer', filePath: 'songs\6.mp3' , coverPath: 'https://source.unsplash.com/random/205x205'},
    { songName: 'Sometimes', filePath: 'songs\7.mp3' , coverPath: 'https://source.unsplash.com/random/206x206'},
    { songName: 'crime', filePath: 'songs\8.mp3' , coverPath: 'https://source.unsplash.com/random/207x207'},
    { songName: 'Kasam', filePath: 'songs\9.mp3' , coverPath: 'https://source.unsplash.com/random/208x208'},
    { songName: 'Star Boy', filePath: 'songs\10.mp3' , coverPath: 'https://source.unsplash.com/random/209x209'},
];
songItem.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src= songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText= songs[i].songName;
});

masterPlay.addEventListener('click', ()=>{
    if( audio.paused || audio.currentTime<=0){
        audio.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audio.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
});
audio.addEventListener('timeupdate', ()=>{
  console.log('timeupdate');
  progress = parseInt((audio.currentTime/audio.duration)*100);
  myProgressBar.value= progress;
});
myProgressBar.addEventListener('change', ()=>{
    audio.currentTime=myProgressBar.value*audio.duration/100;
});
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
};
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audio.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audio.currentTime = 0;
        audio.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audio.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audio.currentTime = 0;
    audio.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audio.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audio.currentTime = 0;
    audio.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})