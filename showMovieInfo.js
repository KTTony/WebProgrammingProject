document.querySelector("#movie_one .movie_title a").addEventListener('click',()=>{
    document.querySelector("#one").style.display = "flex";
    document.querySelector("#threeblocks").style.display = "none";
    document.querySelector("header").style.display = "none";
    document.querySelector(".tmdb-result").innerHTML = "";
    document.querySelector(".backToMain").style.display = "block";
    document.querySelector('body').scrollIntoView({ behavior: 'smooth', block: 'start' });
  })

  document.querySelector("#movie_two .movie_title a").addEventListener('click',()=>{
    document.querySelector("#two").style.display = "flex";
    document.querySelector("#threeblocks").style.display = "none";
    document.querySelector("header").style.display = "none";
    document.querySelector(".tmdb-result").innerHTML = "";
    document.querySelector(".backToMain").style.display = "block";
    document.querySelector('body').scrollIntoView({ behavior: 'smooth', block: 'start' });
  })

  document.querySelector("#movie_three .movie_title a").addEventListener('click',()=>{
    document.querySelector("#three").style.display = "flex";
    document.querySelector("#threeblocks").style.display = "none";
    document.querySelector("header").style.display = "none";
    document.querySelector(".tmdb-result").innerHTML = "";
    document.querySelector(".backToMain").style.display = "block";
    document.querySelector('body').scrollIntoView({ behavior: 'smooth', block: 'start' });
  })