var mapV = document.querySelector(".Tmap");
var map = document.querySelector("#map");
var viewBack = document.querySelector("#map-view");
var closeTag = document.querySelector("#map-view svg")
closeTag.addEventListener("click", () => {
    viewBack.classList.add("hidden");
})
mapV.addEventListener("click", () => {
    viewBack.classList.remove("hidden");
})
document.addEventListener('keydown', (ele)=>{
    if (ele.key === 'Escape') {
        viewBack.classList.add("hidden");
    }
});