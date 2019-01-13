document.querySelector("#movie_one .movie_title a").addEventListener('click',()=>{
    document.querySelector("#one").classList.remove('hidden');
    document.querySelector("#one").classList.add('movieWrap');
    document.querySelector("#threeblocks").classList.remove('movieWrap');
    document.querySelector("#threeblocks").style.display = "none";
    document.querySelector("header").style.display = "none";
    document.querySelector(".tmdb-result").innerHTML = "";
    document.querySelector(".backToMain").style.display = "block";

    //document.querySelector(".movieWrap").style.display = "none";
    //document.querySelector("#one").style.display = "flex";
    document.querySelector('body').scrollIntoView({ behavior: 'smooth', block: 'start' });
  })

  document.querySelector("#movie_two .movie_title a").addEventListener('click',()=>{
    document.querySelector("#two").classList.remove('hidden');
    document.querySelector("#two").classList.add('movieWrap');
    document.querySelector("#threeblocks").classList.remove('movieWrap');
    document.querySelector("#threeblocks").style.display = "none";
    document.querySelector("header").style.display = "none";
    document.querySelector(".tmdb-result").innerHTML = "";
    document.querySelector(".backToMain").style.display = "block";

    //document.querySelector(".movieWrap").style.display = "none";
    //document.querySelector("#one").style.display = "flex";
    document.querySelector('body').scrollIntoView({ behavior: 'smooth', block: 'start' });
  })

  document.querySelector("#movie_three .movie_title a").addEventListener('click',()=>{
    document.querySelector("#three").classList.remove('hidden');
    document.querySelector("#three").classList.add('movieWrap');
    document.querySelector("#threeblocks").classList.remove('movieWrap');
    document.querySelector("#threeblocks").style.display = "none";
    document.querySelector("header").style.display = "none";
    document.querySelector(".tmdb-result").innerHTML = "";
    document.querySelector(".backToMain").style.display = "block";

    //document.querySelector(".movieWrap").style.display = "none";
    //document.querySelector("#one").style.display = "flex";
    document.querySelector('body').scrollIntoView({ behavior: 'smooth', block: 'start' });
  })