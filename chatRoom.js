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

chatRoom.once('value', function (snapshot) {
    var test = snapshot.val()
    console.log(test);
    for (const i in test) {
        console.log(i);
    }
})

// chatRoom.on('value', function (snapshot) {
//     console.log('資料被更新了，資料內容是' + snapshot.val())
// })



function chatBox() {
    var name = document.querySelector("#chatName").value;
    var writeText = document.querySelector("#chatText").value;
    var createText = chatRoom.push();
    createText.set({
        "name": name,
        "text": writeText
    });
    // chatRoom.once('value', function (snapshot) {
    //     console.log(snapshot.val());
    // })
}
