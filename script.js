console.log("Welcome to the world of music");
// All songs information
let song = [
{ SongName: "JayJagganath", FilePath: "songs/Jay Jagganath.mp3", Coverimg: "Images_of_music_app/cover5.jpg" },
{ SongName: "Khokabhai",FilePath: "songs/Khokabhai.mp3", Coverimg: "Images_of_music_app/cover6.jpg" },
{ SongName: "Dilwale", FilePath: "songs/Dilwale.mp3", Coverimg: "Images_of_music_app/cover7.jpg" },
{ SongName: "Master", FilePath: "songs/Master.mp3", Coverimg: "Images_of_music_app/cover2.jpg" },
]
// Intitialization of all variables to use
let index=song[0].FilePath;
let audio = new Audio(index);
let Playbutton=document.getElementById("mainplay")
let progressbar=document.getElementById("Progressbar")
let gif=document.getElementById("gif")
let SongItem=Array.from(document.getElementsByClassName("songItem"));
// song Name & cover image change Handling
 SongItem.forEach((element,i)=>{
 element.getElementsByTagName("img")[0].src=song[i].Coverimg;
 element.getElementsByTagName("span")[0].innerHTML=song[i].SongName;
 })
// Master play/pause event handling
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
         let select=e.target.id;//image id i.e the image icon
         let index = song.find(songItem => songItem.SongName === select).FilePath;
         e.target.src="Images_of_music_app/pause.png"
         audio.src=`${index}`;
         audio.currentTime=0;
         const progressbartime=parseInt((audio.currentTime/audio.duration)*100);
         progressbar.value=progressbartime;
         audio.play(); gif.style.opacity=1;
         mainplayicon.src="Images_of_music_app/pause.png";
    })
})
// Prevous Button handling
document.getElementById("pre").addEventListener('click',()=>{
    let maxindex = song.length;
    let currentIndex = song.findIndex(songItem => songItem.FilePath === index);

    if (currentIndex === 0) {
        
        index = song[maxindex - 1].FilePath;
    } else {
        
        index = song[currentIndex - 1].FilePath;
    }
     
     audio.src=`${index}`;
     audio.currentTime=0;
     const progressbartime=parseInt((audio.currentTime/audio.duration)*100);
     progressbar.value=progressbartime;
     audio.play(); gif.style.opacity=1;
     mainplayicon.src="Images_of_music_app/pause.png";
})
//Next Button handling
document.getElementById("nex").addEventListener('click',()=>{
    let maxindex = song.length;
    let currentIndex = song.findIndex(songItem => songItem.FilePath === index);
    if (currentIndex === maxindex-1) {
        index = song[0].FilePath;
    } else { 
        index = song[currentIndex + 1].FilePath;
    }
     audio.src=`${index}`;
     audio.currentTime=0;
     const progressbartime=parseInt((audio.currentTime/audio.duration)*100);
     progressbar.value=progressbartime;
     audio.play(); gif.style.opacity=1;
     mainplayicon.src="Images_of_music_app/pause.png";
})
