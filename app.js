var form = document.querySelector("form");
var input = document.querySelector('input[type="text"]');
var resultT = document.querySelector(".tmdb-result");

async function movieResult(source, poster, name, year, overview, id, score) {
    var movieInfo = document.createElement("div");
    var imageItem = document.createElement("div");
    var infoitem = document.createElement("div");
    var movie_title = document.createElement("div");
    var movie_time = document.createElement("div");
    var movie_score = document.createElement("div");
    var movie_info = document.createElement("div");
    var movieTitle = document.createElement("a");
    var releaseYear = document.createElement("h4");
    var showOverview = document.createElement("p");
    var img = document.createElement("img");
    var voteScore = document.createElement("h4");
    var infoTitle = document.createElement("h3");

    movieInfo.classList.add('movie_');
    movieInfo.id = id;
    imageItem.classList.add('movie_img');
    infoitem.classList.add('movie_context');
    movie_title.classList.add('movie_title');
    movie_time.classList.add('movie_time');
    movie_score.classList.add('movie_score');
    movie_info.classList.add('movie_info');

    movieTitle.innerHTML = name;
    releaseYear.innerHTML = "上映日期 :  " + year;
    img.src = poster;
    showOverview.innerHTML = overview;
    infoTitle.innerHTML = "簡介";
    voteScore.innerHTML = "評價 :  " + score;
    movieTitle.href = "https://www.themoviedb.org/movie/" + id;

    imageItem.appendChild(img);
    movie_title.appendChild(movieTitle);
    movie_time.appendChild(releaseYear);
    movie_score.appendChild(voteScore);
    movie_info.appendChild(infoTitle);
    movie_info.appendChild(showOverview);
    infoitem.appendChild(movie_title);
    infoitem.appendChild(movie_time);
    infoitem.appendChild(movie_score);
    infoitem.appendChild(movie_info);
    movieInfo.appendChild(imageItem);
    movieInfo.appendChild(infoitem);

    resultT.appendChild(movieInfo);
    await ifSearchNone();
}

function search(e) {
    document.querySelector(".backToMainForSearch").style.display = "block";
    document.querySelector(".movieWrap").style.display = "none";
    e.preventDefault();
    resultT.innerHTML = "";
    var searchTitle = input.value;
    makeTRequest(searchTitle);
    input.value = "";
}

var apiKey = "27a755a8ad94123ec88d4afa130f41ea";
var urlT = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&language=zh-TW&query=";
var urlE;
async function makeTRequest(searchTitle) {
    xhr = new XMLHttpRequest();

    xhr.onload = function () {
        var response = JSON.parse(this.responseText).results;

        response.map(async function (item) {
            urlE = "https://api.themoviedb.org/3/movie/" + item.id + "?api_key=" + apiKey;
            ifNoZHTW(item.overview, item.id);
            await movieResult(
                "tmdb",
                "https://image.tmdb.org/t/p/w300" + item.poster_path,
                item.title,
                item.release_date,
                item.overview,
                item.id,
                item.vote_average
            );
        });
    };
    xhr.open("GET", urlT + searchTitle, true);
    xhr.send();
}
async function ifNoZHTW(overview, id) {
    if (overview != "") { }
    else {
        xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var response = JSON.parse(this.responseText);
            document.getElementById(id).querySelector("p").innerHTML = response.overview;
        };
        xhr.open("GET", urlE, true);
        xhr.send();
    }
}
async function ifSearchNone(){
    if(document.querySelector(".tmdb-result .movie_ .movie_context a").textContent==""){
        var noneSearch = document.createElement("H2");
        noneSearch.innerHTML=""
        resultT.appendChild()
    }
}

form.addEventListener("submit", search);



window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    scrollButton();
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".goToTop").style.display = "block";
    } else {
        document.querySelector(".goToTop").style.display = "none";
    }
}
document.querySelector(".backToMainForSearch").addEventListener("click", () => {
    document.querySelector(".tmdb-result").innerHTML = "";
    document.querySelector(".backToMainForSearch").style.display = "none";
    document.querySelector(".movieWrap").style.display = "flex";
    document.querySelector('body').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.querySelector(".goToTop").addEventListener("click", () => {
    document.querySelector('body').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

function getScrollHeight() {
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight; return scrollHeight;
}

function getWindowHeight() {
    var windowHeight = 0; if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}
function scrollButton(){
    if(document.documentElement.scrollTop>getScrollHeight()-getWindowHeight()-35){
        document.querySelector(".backToMainForSearch").style.bottom="90px"
        document.querySelector(".goToTop").style.bottom="40px"
    }
    else{
        document.querySelector(".backToMainForSearch").style.bottom="60px"
        document.querySelector(".goToTop").style.bottom="10px"
    }
}