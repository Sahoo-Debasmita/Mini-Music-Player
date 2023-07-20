console.log("Welcome to the world of music");
// Intitialization of all variables to use
let index=document.getElementById("songs/Jay Jagganath.mp3");
let audio = new Audio("songs/pasoori.mp3");
let Playbutton=document.getElementById("mainplay")
let progressbar=document.getElementById("Progressbar")
let gif=document.getElementById("gif")
let SongItem=Array.from(document.getElementsByClassName("songItem"));
// All songs information
let song = [
{ SongName: "Jay Jagganath", FilePath: "songs/1.mp3", Coverimg: "Images_of_music_app/cover5.jpg" },
{ SongName: "Khoka Bhai special",FilePath: "song/2.mp3", Coverimg: "Images_of_music_app/cover6.jpg" },
{ SongName: "Tukur tukur", FilePath: "songs/3.mp3", Coverimg: "Images_of_music_app/cover7.jpg" },
{ SongName: "Master song", FilePath: "songs/4.mp3", Coverimg: "Images_of_music_app/cover2.jpg" },
]
// song Name & cover image change Handling
 SongItem.forEach((element,i)=>{
 element.getElementsByTagName("img")[0].src=song[i].Coverimg;
 element.getElementsByTagName("span")[0].innerHTML=song[i].SongName;
 })
// play/pause event handling
Playbutton.addEventListener('click',()=>{
    if (audio.paused || audio.currentTime<1) {
        audio.play();  
        mainplayicon.src="Images_of_music_app/pause.png";
        gif.style.opacity=1;
    }
    else{
        audio.pause();
        mainplayicon.src="Images_of_music_app/play.png";
        gif.style.opacity=0;
    }
})
// Handling Progressbar with audio time
  audio.addEventListener("timeupdate", ()=>{
   const progressbartime=parseInt((audio.currentTime/audio.duration)*100);
   progressbar.value=progressbartime;
})
progressbar.addEventListener("change",()=>{
    audio.currentTime=(progressbar.value*audio.duration)/100;    
})
// SongItem playpause handle
const makeallplay=()=>{
    Array.from(document.getElementsByClassName("playsong")).forEach((element)=>{
        element.src="Images_of_music_app/play.png"
    })
}
Array.from(document.getElementsByClassName("playsong")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplay();
         index=e.target.id;
         e.target.src="Images_of_music_app/pause.png"
         audio.src=`${index}`;
         audio.currentTime=0;
         const progressbartime=parseInt((audio.currentTime/audio.duration)*100);
         progressbar.value=progressbartime;
         audio.play(); gif.style.opacity=1;
         mainplayicon.src="Images_of_music_app/pause.png";
    })
})
