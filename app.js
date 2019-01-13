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
    document.querySelector(".backToMain").style.display = "block";
    document.querySelector("header").style.display = "none";
    document.querySelector(".movieWrap").style.display = "none";
    e.preventDefault();
    resultT.innerHTML = "<h2>搜尋結果</h2>";
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
            if(item.overview.length>200){
                item.overview=item.overview.substr(0,200)+"......";
            }
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
            if(response.overview.length>200){
                response.overview=response.overview.substr(0,200)+"......";
            }
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