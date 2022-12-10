var mySong1 = document.getElementById("mySong1");
var icon1 = document.getElementById("icon1");

icon1.onclick = function(){

    if(mySong1.pause){
        mySong1.play();
        icon1.src = "/AfrikZik/Media/img/pause-circle.svg";
    } 
    else{
        icon1.src = "/AfrikZik/Media/img/play-circle.svg";
        mySong1.pause(); 
    }
}