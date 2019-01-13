function showVideo(){
    const video = document.querySelector('div #video_view');
    document.body.classList.add('no-scroll');
    video.style.top = window.pageYOffset + 'px';
    video.classList.remove('hidden');
}
function offVideo(){
    document.body.classList.remove('no-scroll');
    video.classList.add('hidden');
}
const toVideo = document.querySelector('.movie_about .remark .video');
toVideo.addEventListener('click',showVideo);

const video = document.querySelector('div #video_view');
video.addEventListener('click',offVideo);