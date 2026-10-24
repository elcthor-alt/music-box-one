const stopBtn = document.querySelector('.stop-btn');
const playBtn = document.querySelector('.play-btn');
const audio = document.querySelector('.audio');
const img = document.querySelector('.img');
const back = document.querySelector('.play-back');
const next = document.querySelector('.play-next')
const musicbox = document.querySelector('.musiclist')





const musicList = [{ id: 1, cover: './photos/Place_Of_The_Gods-COVER-1500x1500-1-650x650.jpg', audio: './music/yt1s.com_-_the_song_of_the_golden_dragon_live_in_odeon_vienna_2011_estas_tonne.mp3' },
{ id: 2, cover: './photos/chopin_im_salon_des_fursten_anton_radziwill_im_herbst_1829_in_berlin_gemalde_von_henryk_siemiradzki_1887.jpg__1420x696_q85_crop_subject_location-796,459_subsampling-2_upscale.jpg', audio: "./music/Classicals.de - Chopin - Bourree B. 160b2 in G major.mp3" },
{ id: 3, cover: './photos/images.jpeg', audio: "./music/Classicals.de - Chopin - Albumleaf, B. 151.mp3" }];





let flag = 0;

next.addEventListener('click', () => {
    flag++;
    if (flag > 2) {
        flag = 0;

    }


    const newcontent = musicList[flag]
    img.setAttribute("src", newcontent.cover)
    audio.setAttribute('src', newcontent.audio)
    audio.play()


})


back.addEventListener("click", () => {
    flag--;
    if (flag < 0) {
        flag = 2;
    }
    const newcontent = musicList[flag]
    img.setAttribute("src", newcontent.cover)
    audio.setAttribute('src', newcontent.audio)
    audio.play()

})


back.addEventListener('click', () => {


})

stopBtn.addEventListener('click', () => {
    audio.pause()




})

playBtn.addEventListener('click', () => {

    audio.play()







});


audio.addEventListener('duration', () => {

})


audio.addEventListener("play", () => {
    img.classList.add("rotating");
});


audio.addEventListener("pause", () => {
    img.classList.remove("rotating");
});

audio.addEventListener("ended", () => {
    img.classList.remove("rotating");
});






const currentTime = document.querySelector(".current-time");
const totalDuration = document.querySelector(".total-duration");



// Show total duration when audio metadata loads
audio.addEventListener("loadedmetadata", () => {
    totalDuration.textContent = (`${Math.floor(audio.duration / 60)}:${Math.floor(audio.duration) % 60}`);
});

// Update current time while playing
audio.addEventListener("timeupdate", () => {
    currentTime.textContent = (`${Math.floor(audio.currentTime / 60)}:${Math.floor(audio.currentTime) % 60}`);
});