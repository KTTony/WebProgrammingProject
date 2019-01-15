var config = {
    apiKey: "AIzaSyB24DmulfDKl5MRwQxTnG9hn8DtikCj9xs",
    authDomain: "arctic-hybrid-207016.firebaseapp.com",
    databaseURL: "https://arctic-hybrid-207016.firebaseio.com",
    projectId: "arctic-hybrid-207016",
    storageBucket: "arctic-hybrid-207016.appspot.com",
    messagingSenderId: "854815884301"
};
firebase.initializeApp(config);

var chatRoom = firebase.database().ref('chatRoom');
document.querySelector("footer .aboutButton").addEventListener('click', () => {
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
    textBox.innerHTML = "";
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
    if (name != "" && writeText != "") {
        var createText = chatRoom.push();
        createText.set({
            "name": name,
            "text": writeText
        });
        document.querySelector("#chatName").value = "";
        document.querySelector("#chatText").value = "";
    }
}
