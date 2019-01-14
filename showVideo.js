const videoOne = document.getElementById("one").querySelector('div #video_view');
const videoTwo = document.getElementById("two").querySelector('div #video_view');
const videoThree = document.getElementById("three").querySelector('div #video_view');

console.log(videoOne)

function showVideo(link,video) {
    // const video = document.querySelector('div #video_view');
    console.log(video);
    video.innerHTML = link;
    document.body.classList.add('no-scroll');
    video.style.top = window.pageYOffset + 'px';
    video.classList.remove('hidden');
}
function offVideo(video) {
    document.body.classList.remove('no-scroll');
    video.innerHTML = "";
    video.classList.add('hidden');
}

const toVideoOne = document.querySelector('#one .movie_about .remark .video');
toVideoOne.addEventListener('click', () => {
    const link = '<iframe src="https://www.youtube.com/embed/4VrcUVzvRwM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>';
    showVideo(link,videoOne);
});
const toVideoTwo = document.querySelector('#two .movie_about .remark .video');
toVideoTwo.addEventListener('click', () => {
    const link = '<iframe src="https://www.youtube.com/embed/N2WCq9cIPEI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    showVideo(link,videoTwo);
});
const toVideoThree = document.querySelector('#three .movie_about .remark .video');
toVideoThree.addEventListener('click', () => {
    const link = '<iframe src="https://www.youtube.com/embed/WPiJhQgKFX8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>';
    showVideo(link,videoThree);
});


videoOne.addEventListener('click', ()=>{
    offVideo(videoOne);
});
videoTwo.addEventListener('click', ()=>{
    offVideo(videoTwo);
});
videoThree.addEventListener('click', ()=>{
    offVideo(videoThree);
});

