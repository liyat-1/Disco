const music = new Audio("Rophnan.mp3");

const songs = [
    {
        id:"1",
        songName:`Shegye <br>
                <div class="subtitle">
                    Rophnan
                </div>`,
        poster:"Image/1.jpg ",
        background:"Image/1.jpg ",
        lyrics: `ሸጎዬ ሸጋለም ሸጊቱ<br>
                 አትመጪም ወይ<br>
                `,

    },
    {
        id:"2",
        songName:`Abebaye
                <div class="subtitle">
                    Veronica Adane
                </div>`,
        poster:"Image/2.jpg"
        ,
        background:"Image/2.jpg ",
        lyrics: `Lyrics Loading`,
    }
    ,
    {
        id:"3",
        songName:` Chal Zendro
                    <div class="subtitle">
                        Dawit Tsige
                    </div>`,
        poster:"Image/3.jpg"
        ,
        background:"Image/3.jpg ",
        lyrics: `Lyrics Loading`,
    }
    ,
    {
        id:"4",
    songName:` What Goes Around... Comes Around
                    <div class="subtitle">
                        Justin Timberlake
                    </div>`,
        poster:"Image/4.jpg",
        
        background:"Image/4.jpg ",
        lyrics: `Lyrics Loading`,
    }
    ,
    {
        id:"5",
        songName:` Blame It On The Rain
                        <div class="subtitle">
                            Milli Vanilli
                        </div>`,
        poster:"Image/5.jpg"
        ,
        background:"Image/5.jpg ",
        lyrics: `Lyrics Loading`,
    }
    ,
    {
        id:"6",
        songName:`She Knows
                        <div class="subtitle">
                            J. Cole
                        </div>`,
        poster:"Image/6.jpg ",
        
        background:"Image/6.jpg ",
        lyrics: `Lyrics Loading`,
    }
    ,
    {
        id:"7",
        songName:`You Right
                            <br>
                            <div class="subtitle">
                                Doja Cat
                            </div>`,
        poster:"Image/7.jpg"
        ,
        background:"Image/7.jpg ",
        lyrics: `Lyrics Loading`,
    }
    ,
    {
        id:"8",
        songName:`Bad Guy
                            <br>
                            <div class="subtitle">
                                Billie Eilish
                            </div>`,
        poster:"Image/8.jpg"
        ,
        background:"Image/8.jpg ",
        lyrics: `Lyrics Loading`,
    }
    ,
    {
        id:"9",
        songName:`Needed Me
                            <br>
                            <div class="subtitle">
                                Rihanna
                            </div>`,
        poster:"Image/9.jpg"
        ,
        background:"Image/9.jpg ",
        lyrics: `Lyrics Loading`,
    }
    ,
    {
        id:"10",
        songName:`Daddy Issues
                            <br>
                            <div class="subtitle">
                                The Neighbourhood
                            </div>`,
        poster:"Image/10.jpg"
        ,
        background:"Image/10.jpg ",
        lyrics: `Lyrics Loading`,
    }
    ,
    {
        id:"11",
        songName:`Pacify Her
                            <br>
                            <div class="subtitle">
                                Melanie Martinez
                            </div>`,
        poster:"Image/11.jpg"
        ,
        background:"Image/11.jpg ",
        lyrics: `Lyrics Loading`,
    }
    ,
    {
        id:"12",
        songName:`Bad Blood
                            <br>
                            <div class="subtitle">
                                Taylor Swift and Kendrick Lamar 
                            </div>`,
        poster:"Image/12.jpg"
        ,
        background:"Image/12.jpg ",
        lyrics: `Lyrics Loading`,
    }
    ,
    {
        id:"13",
        songName:`Layhonlen | ላይሆንል
                            <br>
                            <div class="subtitle">
                                Ben X Jordan & Bek Ge'ez 
                            </div>`,
        poster:"Image/13.jpg",
         background:"Image/13.jpg ",
         lyrics: `Lyrics Loading`,

    }
    ,
    {
        id:"14",
        songName:`Like Crazy
                            <br>
                            <div class="subtitle">
                                Jimin
                            </div>`,
        poster:"Image/14.jpg",
         background:"Image/14.jpg ",
         lyrics: `Lyrics Loading`,
    }
    ,
    {
        id:"15",
        songName:`Fetish
                            <br>
                            <div class="subtitle">
                                Selena Gomez
                            </div>`,
        poster:"Image/15.jpg",
         background:"Image/15.jpg ",
         lyrics: `Lyrics Loading`,
    }
    ,
    {
        id:"16",
        songName:`Have Mercy
                            <br>
                            <div class="subtitle">
                                Chlöe
                            </div>`,
        poster:"Image/16.jpg",
         background:"Image/16.jpg ",
         lyrics: `Lyrics Loading`,
    }
    ,
    {
        id:"17",
        songName:`Moth to a Flame
                            <br>
                            <div class="subtitle">
                                Swedish House Mafia ft The weekend
                            </div>`,
        poster:"Image/17.jpg",
         background:"Image/17.jpg ",
         lyrics: `Moth to a flame<br>
         Burning by the fire`,
    }
   

]

Array.from(document.getElementsByClassName('songItem')).forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        masterPlay.classList.remove('bi-play');
        masterPlay.classList.add('bi-pause');
        wave.classList.add('active2');
    }else{
        music.pause();
        masterPlay.classList.add('bi-play');
        masterPlay.classList.remove('bi-pause');
        wave.classList.remove('active2');
    }
})



const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle')
            element.classList.remove('bi-pause-circle')
       
    })
}

const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background ="rgb(105,105,170,0)";
    })
}



let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle')
        e.target.classList.add('bi-pause-circle')
        music.src = `Audio/${index}.mp3`;
        poster_master_play.src = `Image/${index}.jpg`
        music.play();
        let song_title= songs.filter((ele)=>{
            return ele.id == index;
        })
        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        let selectedSong = songs.find((ele) => ele.id == index);

        // Set song details, content, and background
        setBackground(selectedSong.background);
        updateContent(selectedSong); 

        masterPlay.classList.remove('bi-play');
        masterPlay.classList.add('bi-pause');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play');
            masterPlay.classList.remove('bi-pause');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)";
    })

})
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];
music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);

    if(sec < 10){
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);

    if(sec1 < 10){
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
    
})

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended',()=>{
    masterPlay.classList.add('bi-play');
    masterPlay.classList.remove('bi-pause');
    wave.classList.remove('active2');
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change',()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-down');
        vol_icon.classList.add('bi-volume-mute');
        vol_icon.classList.remove('bi-volume-up');
    }
    if(vol.value > 0){
        vol_icon.classList.add('bi-volume-down');
        vol_icon.classList.remove('bi-volume-mute');
        vol_icon.classList.remove('bi-volume-up');
    }
    if(vol.value > 50){
        vol_icon.classList.remove('bi-volume-down');
        vol_icon.classList.remove('bi-volume-mute');
        vol_icon.classList.add('bi-volume-up');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `Audio/${index}.mp3`;
    poster_master_play.src = `Image/${index}.jpg`
    music.play();
    let song_title= songs.filter((ele)=>{
        return ele.id == index;
    })
    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    let selectedSong = songs.find((ele) => ele.id == index);

    // Set song details, content, and background
    setBackground(selectedSong.background);
    updateContent(selectedSong); 

    makeAllPlays();
    document.getElementById(`${index}`).classList.remove('bi-play');
    document.getElementById(`${index}`).classList.add('bi-pause');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)";
})

next.addEventListener('click',()=>{
    index -= 0;
    index += 1;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `Audio/${index}.mp3`;
    poster_master_play.src = `Image/${index}.jpg`
    music.play();
    let song_title= songs.filter((ele)=>{
        return ele.id == index;
    })
    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    let selectedSong = songs.find((ele) => ele.id == index);

    // Set song details, content, and background
    setBackground(selectedSong.background);
    updateContent(selectedSong); 

    makeAllPlays();
    document.getElementById(`${index}`).classList.remove('bi-play');
    document.getElementById(`${index}`).classList.add('bi-pause');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)";
})

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');

let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click',()=>{
    pop_song.scrollLeft -=330;
})

right_scroll.addEventListener('click',()=>{
    pop_song.scrollLeft +=330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');

let item= document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click',()=>{
    item.scrollLeft -=330;
})

right_scrolls.addEventListener('click',()=>{
    item.scrollLeft +=330;
})



const setBackground = (backgroundUrl) => {
    document.querySelector('.song_side').style.background = `
        linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
        url('${backgroundUrl}') no-repeat center center / cover`;
};


Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle');
        e.target.classList.add('bi-pause-circle');

        // Get the selected song's details
        let selectedSong = songs.find((ele) => ele.id == index);

        // Set song details and background
        music.src = `Audio/${index}.mp3`;
        poster_master_play.src = selectedSong.poster;
        title.innerHTML = selectedSong.songName;
        setBackground(selectedSong.background); // Update background

        music.play();
        masterPlay.classList.remove('bi-play');
        masterPlay.classList.add('bi-pause');
        wave.classList.add('active2');

        music.addEventListener('ended', () => {
            masterPlay.classList.add('bi-play');
            masterPlay.classList.remove('bi-pause');
            wave.classList.remove('active2');
        });

        makeAllBackgrounds();
        document.getElementsByClassName('songItem')[`${index - 1}`].style.background =
            "rgb(105,105,170,0.1)";
    });
});


const updateContent = (song) => {
    document.getElementById('songTitle').innerHTML = song.songName;
    document.getElementById('songLyrics').innerHTML = song.lyrics;
};

Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle');
        e.target.classList.add('bi-pause-circle');

        // Get the selected song's details
        let selectedSong = songs.find((ele) => ele.id == index);

        // Set song details, content, and background
        music.src = `Audio/${index}.mp3`;
        poster_master_play.src = selectedSong.poster;
        setBackground(selectedSong.background);
        updateContent(selectedSong); 

        music.play();
        masterPlay.classList.remove('bi-play');
        masterPlay.classList.add('bi-pause');
        wave.classList.add('active2');

        music.addEventListener('ended', () => {
            masterPlay.classList.add('bi-play');
            masterPlay.classList.remove('bi-pause');
            wave.classList.remove('active2');
        });

        makeAllBackgrounds();
        document.getElementsByClassName('songItem')[`${index - 1}`].style.background =
            "rgb(105,105,170,0.1)";
    });
});
