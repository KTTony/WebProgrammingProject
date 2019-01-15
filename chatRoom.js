var config = {
    apiKey: "AIzaSyAebII7M5tRLEZLzGrXr1OI5t5M2-Merjg",
    authDomain: "wpproject-39c2f.firebaseapp.com",
    databaseURL: "https://wpproject-39c2f.firebaseio.com",
    projectId: "wpproject-39c2f",
    storageBucket: "wpproject-39c2f.appspot.com",
    messagingSenderId: "725498474206"
};
firebase.initializeApp(config);

var chatRoom = firebase.database().ref('chatRoom');
document.querySelector("footer .aboutButton").addEventListener('click',()=>{
    document.querySelector("header").style.display = "none";
    document.querySelector(".tmdb-result").innerHTML = "";
    document.querySelector(".aboutUS").style.display = "flex";
    document.querySelector(".backToMain").style.display = "block";
    document.querySelector(".movieWrap").style.display = "none";
    document.querySelector(".tmdb-result").innerHTML = "";
    offVideo(videoOne);
    offVideo(videoTwo);
    offVideo(videoThree);
    document.querySelector("#one").style.display = "none";
    document.querySelector("#two").style.display = "none";
    document.querySelector("#three").style.display = "none";
    var textBox = document.querySelector(".textBox");
    textBox.scrollTop = textBox.scrollHeight;
    document.querySelector('body').scrollIntoView({ behavior: 'smooth', block: 'start' });
})



chatRoom.on('value', async function (snapshot) {
    var test = snapshot.val();
    var textBox = document.querySelector(".textBox");
    textBox.innerHTML="";
    for (const i in test) {
        var middunSpace = document.createElement("div");
        var chatMessageWrap = document.createElement("div");
        chatMessageWrap.style = "display: flex;";
        middunSpace.classList.add('middunSpace');
        middunSpace.textContent = " : ";
        chatRoom.child(i).child('name').once('value', function (ele) {
            var nameInChat = document.createElement("div");
            nameInChat.textContent = ele.val();
            nameInChat.classList.add('nameInChat');
            var textInChat = document.createElement("div");
            chatRoom.child(i).child('text').once('value', function (e) {
                textInChat.textContent = e.val();
                textInChat.classList.add('textInChat');
            })

            chatMessageWrap.appendChild(nameInChat);
            chatMessageWrap.appendChild(middunSpace);
            chatMessageWrap.appendChild(textInChat);
            textBox.appendChild(chatMessageWrap);
        })
    }
    textBox.scrollTop = textBox.scrollHeight;
})




function chatBox() {
    var name = document.querySelector("#chatName").value;
    var writeText = document.querySelector("#chatText").value;
    if(name!=""&&writeText!=""){
        var createText = chatRoom.push();
    createText.set({
        "name": name,
        "text": writeText
    });
    document.querySelector("#chatName").value="";
    document.querySelector("#chatText").value="";
    }
}
