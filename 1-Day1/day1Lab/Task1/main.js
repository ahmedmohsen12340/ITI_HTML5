let video = document.getElementById('video');
let audio =document.querySelector('#volume');
let mute = document.querySelector('#mute');
let currentTime = document.querySelector('#currentTime');
let indicator = document.querySelector('#indicator');
let speed = document.querySelector('#speed');
let beforeMute;


function timepass(){
    currentTime.value = video.currentTime;
    indicator.innerHTML=`${(video.currentTime/60).toFixed(0)}:${(video.currentTime%60).toFixed(0)}/${(video.duration/60).toFixed(0)}:${(video.duration%60).toFixed(0)}`;
}
function changeCurrent(){
    video.currentTime = currentTime.value;
}


function play(){
    video.play();
    indicator.innerHTML=`${(video.currentTime/60).toFixed(0)}:${(video.currentTime%60).toFixed(0)}/${(video.duration/60).toFixed(0)}:${(video.duration%60).toFixed(0)}`;
}
function stop(){
    video.pause();
}
function spDown(){
    if(video.playbackRate>=0.25){
        video.playbackRate -= 0.25;
        speed.value = video.playbackRate;
    }
}
function spUp(){
    if(video.playbackRate<=2.5){
        video.playbackRate += 0.25;
        speed.value = video.playbackRate;
    }
}
function back(){
    video.currentTime -=10;
}
function forward(){
    video.currentTime +=10;
}
function changeVolume(){
    video.volume = audio.value;
}
function toggleMute(){
    if(mute.innerHTML=='mute')
    {
        beforeMute=video.volume
        video.volume = 0;
        audio.value = 0;    
        mute.innerHTML='unmute';
    }else if(mute.innerHTML=='unmute'){
        video.volume=beforeMute;
        audio.value=beforeMute;
        mute.innerHTML='mute';
    }
}

function changespeed(){
    video.playbackRate=speed.value;
}