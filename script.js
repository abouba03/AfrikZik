var mySong = [document.getElementById("mySong1"),document.getElementById("mySong2"),document.getElementById("mySong3")];
        var icon = [document.getElementById("icon1"),document.getElementById("icon2"),document.getElementById("icon3")];

        
            for(let i=0; i<=11; i++)
            {
                icon[i].onclick = function(){

                if (mySong[i].paused) {
                    mySong[i].play();
                    icon.src = "Media/pause.png"
                } else {
                    mySong[i].pause();
                    icon.src = "Media/play.png"
                }
            }
            
        }
    