window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    scrollButton();
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".goToTop").style.display = "block";
    } else {
        document.querySelector(".goToTop").style.display = "none";
    }
}
document.querySelector(".backToMain").addEventListener("click", () => {
    document.querySelector(".tmdb-result").innerHTML = "";
    document.querySelector(".backToMain").style.display = "none";
    document.querySelector(".aboutUS").style.display = "none";
    document.querySelector(".movieWrap").style.display = "flex";
    document.querySelector("header").style.display = "block";
    document.querySelector("#one").style.display = "none";
    document.querySelector("#two").style.display = "none";
    document.querySelector("#three").style.display = "none";
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
    var scorllm = Math.round((document.documentElement.scrollTop/(getScrollHeight()-getWindowHeight()))*100);     
    // document.querySelector("body").style.background-color = "rgba("+ Math.round(235-1.57*scorllm) +","+ Math.round(122+0.56*scorllm) +","+ Math.round(119+1.01*scorllm) +",1),rgba("+ Math.round(0+2.38*scorllm) +","+ Math.round(137+0.32*scorllm) +","+ Math.round(167+0.02*scorllm) +",1) ) bottom right";
    document.querySelector(".main").style.background = "linear-gradient(-20deg,  rgba("+ Math.round(235-0.91*scorllm) +","+ Math.round(122+0.96*scorllm) +","+ Math.round(119-1.17*scorllm) +",0.75),rgba("+ Math.round(218-2.18*scorllm) +","+ Math.round(201-0.68*scorllm) +","+ Math.round(166+0.01*scorllm) +",1) ) bottom right";
    if(document.documentElement.scrollTop>getScrollHeight()-getWindowHeight()-35){
        document.querySelector(".backToMain").style.bottom="90px"
        document.querySelector(".goToTop").style.bottom="40px"
    }
    else{
        document.querySelector(".backToMain").style.bottom="60px"
        document.querySelector(".goToTop").style.bottom="10px"
    }
}