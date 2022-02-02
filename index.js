//intialize the variables
let audioElement = new Audio('./songs/1.mp3');
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Template-Audio-1", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg" },
    { songName: "Template-Audio-2", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg" },
    { songName: "Template-Audio-3", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg" },
    { songName: "Template-Audio-4", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg" },
    { songName: "Template-Audio-5", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg" },
    { songName: "Template-Audio-6", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg" },
    { songName: "Template-Audio-7", filePath: "./songs/8.mp3", coverPath: "./covers/7.jpg" },
    { songName: "Template-Audio-8", filePath: "./songs/9.mp3", coverPath: "./covers/8.jpg" },
    { songName: "Template-Audio-9", filePath: "./songs/7.mp3", coverPath: "./covers/9.jpg" },
    { songName: "Template-Audio-10", filePath: "./songs/10.mp3", coverPath: "./covers/10.jpg" }
]
songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// Handle play/pause  click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})
// Listen to events
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})
const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlay();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src=`./songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9)
    {
        songIndex=0;
    
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`./songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`./songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
