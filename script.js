console.log("Welcome to the world of music");
// All songs information
let song = [
    { SongName: "Let me love you", FilePath: "songs/Let me love you.mp3", Coverimg: "Images_of_music_app/let me love u.jpg" },
    { SongName: "Pasoori", FilePath: "songs/pasoori.mp3", Coverimg: "Images_of_music_app/cover3.jpg" },
    { SongName: "Dilwale", FilePath: "songs/Dilwale.mp3", Coverimg: "Images_of_music_app/cover7.jpg" },
    { SongName: "Master", FilePath: "songs/Master.mp3", Coverimg: "Images_of_music_app/cover2.jpg" },
]
// Intitialization of all variables to use
let index = song[0].FilePath;
let audio = new Audio(index);
let Playbutton = document.getElementById("mainplay")
let progressbar = document.getElementById("Progressbar")
let gif = document.getElementById("gif")
let SongItem = Array.from(document.getElementsByClassName("songItem"));
// song Name & cover image change Handling
SongItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = song[i].Coverimg;
    element.getElementsByTagName("span")[0].innerHTML = song[i].SongName;
})
// Master play/pause event handling
Playbutton.addEventListener('click', () => {
    if (audio.paused || audio.currentTime < 1) {
        audio.play();
        mainplayicon.src = "Images_of_music_app/pause.png";
        gif.style.opacity = 1;
    }
    else {
        audio.pause();
        mainplayicon.src = "Images_of_music_app/play.png";
        gif.style.opacity = 0;
    }
})
// Handling Progressbar with audio time
audio.addEventListener("timeupdate", () => {
    const progressbartime = parseInt((audio.currentTime / audio.duration) * 100);
    progressbar.value = progressbartime;
})
progressbar.addEventListener("change", () => {
    audio.currentTime = (progressbar.value * audio.duration) / 100;
})
// SongItem playpause handle
const makeallplay = () => {
    Array.from(document.getElementsByClassName("playsong")).forEach((element) => {
        element.src = "Images_of_music_app/play.png"
    })
}
Array.from(document.getElementsByClassName("playsong")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplay();
        let select = e.target.id;//image id i.e the image icon
        let index = song.find(songItem => songItem.SongName === select).FilePath;//songs/Jay Jagganath.mp3
        e.target.src = "Images_of_music_app/pause.png"// src of img tag
        audio.src = `${index}`;
        audio.currentTime = 0;
        const progressbartime = parseInt((audio.currentTime / audio.duration) * 100);
        progressbar.value = progressbartime;
        audio.play(); gif.style.opacity = 1;
        mainplayicon.src = "Images_of_music_app/pause.png";
    })
})
// Previous Button handling
document.getElementById("pre").addEventListener('click', () => {
    let maxindex = song.length;//4
    let currentIndex = song.findIndex(songItem => songItem.FilePath === index);//The song index that is currently an integer here 0
    if (currentIndex === 0) {
        index = song[maxindex - 1].FilePath;//songs/Master.mp3
        document.getElementById(song[maxindex-1].SongName).src="Images_of_music_app/pause.png";
    } else {
        index = song[currentIndex - 1].FilePath;
        document.getElementById(song[currentIndex-1].SongName).src="Images_of_music_app/pause.png";
    }
    audio.src = `${index}`;
    audio.currentTime = 0;
    const progressbartime = parseInt((audio.currentTime / audio.duration) * 100);
    progressbar.value = progressbartime;
    audio.play(); gif.style.opacity = 1;
    mainplayicon.src = "Images_of_music_app/pause.png";
    document.getElementById(song[currentIndex].SongName).src="Images_of_music_app/play.png";
    
})
//Next Button handling
document.getElementById("nex").addEventListener('click', () => {
    let maxindex = song.length;
    let currentIndex = song.findIndex(songItem => songItem.FilePath === index);
    // For the last song i.e 3
    if (currentIndex !== maxindex - 1) {
        index = song[currentIndex + 1].FilePath;
        document.getElementById(song[currentIndex + 1].SongName).src = "Images_of_music_app/pause.png";
    } else {
        // When the current song is the last song (currentIndex is maxindex - 1),
        // loop back to the first song (index 0) and update the image icon accordingly
        index = song[0].FilePath;
        document.getElementById(song[0].SongName).src = "Images_of_music_app/pause.png";
    }
    audio.src = `${index}`;
    audio.currentTime = 0;
    const progressbartime = parseInt((audio.currentTime / audio.duration) * 100);
    progressbar.value = progressbartime;
    audio.play(); gif.style.opacity = 1;
    mainplayicon.src = "Images_of_music_app/pause.png";
    document.getElementById(song[currentIndex].SongName).src = "Images_of_music_app/play.png";
})
