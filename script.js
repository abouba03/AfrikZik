var mySong1 = document.getElementById("mySong1");
var icon1 = document.getElementById("icon1");
var count = 0;

/*--------------------------------------------*/
var mySong2 = document.getElementById("mySong2");
var icon2 = document.getElementById("icon2");
var count = 0;

/*--------------------------------------------*/
var mySong3 = document.getElementById("mySong3");
var icon3 = document.getElementById("icon3");
var count = 0;

/*--------------------------------------------*/
var mySong4 = document.getElementById("mySong4");
var icon4 = document.getElementById("icon4");
var count = 0;

/*--------------------------------------------*/
var mySong5 = document.getElementById("mySong5");
var icon5 = document.getElementById("icon5");
var count = 0;


icon1.onclick = function(){

    if(count == 0){
        count = 1;
        mySong1.play();
        icon1.src = "/AfrikZik/Media/img/pause-circle.svg";
    }else {
        count = 0;
        mySong1.pause();
        icon1.src = "/AfrikZik/Media/img/play-circle.svg";
    }
}

/*----------------------------------------------------*/
icon2.onclick = function(){

    if(count == 0){
        count = 1;
        mySong2.play();
        icon2.src = "/AfrikZik/Media/img/pause-circle.svg";
    }else {
        count = 0;
        mySong2.pause();
        icon2.src = "/AfrikZik/Media/img/play-circle.svg";
    }
}

/*----------------------------------------------------*/
icon3.onclick = function(){

    if(count == 0){
        count = 1;
        mySong3.play();
        icon3.src = "/AfrikZik/Media/img/pause-circle.svg";
    }else {
        count = 0;
        mySong3.pause();
        icon3.src = "/AfrikZik/Media/img/play-circle.svg";
    }
}

/*----------------------------------------------------*/
icon4.onclick = function(){

    if(count == 0){
        count = 1;
        mySong4.play();
        icon4.src = "/AfrikZik/Media/img/pause-circle.svg";
    }else {
        count = 0;
        mySong4.pause();
        icon4.src = "/AfrikZik/Media/img/play-circle.svg";
    }
}

/*----------------------------------------------------*/
icon5.onclick = function(){

    if(count == 0){
        count = 1;
        mySong5.play();
        icon5.src = "/AfrikZik/Media/img/pause-circle.svg";
    }else {
        count = 0;
        mySong5.pause();
        icon5.src = "/AfrikZik/Media/img/play-circle.svg";
    }
}
