let delay = -0.2;
function creerCarte(number, text) {
    delay = delay + 0.2;

    return `
    
        <div class="carte" style="animation-delay: ${delay}s;">
            <div class="cercle">${number}</div>
            <div class="texte">${text}</div>
        </div>
    `
}

function creerCarte2(img, text) {
    return `
    
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4" style="height: 180px;">
                    <img src="/images/${img}.jpg" class="img-fluid rounded-start " style="height:100%; alt="...">
                </div>

                <div class="col-md-8">
                    <div class="card-body">
                    <p class="card-text">${text}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    `
}

// function insideCard(img, cardText) {
//     return `

//         <div class="card mb-3" style="max-width: 400px;">
//             <div class="col-md-4">
//                 <img src="/images/${img}.jpg" class="img-fluid rounded-start" alt="">
//             </div>

//             <div class="col-md-8">
//                 <div class="card-body">
//                     <h5 class="card-title">${cardText}</h5>
//                 </div>
//             </div>
//         </div>
//     `
// }

// function outSideCard(conteudo) {
//     return `

//         <div class="container-md">
//             <div class="container-md ">
//                 <div class="row">
//                     <div class="col-md-4" id="col-md-4">
//                         <h5 id="podcast" class="text-center">PODCATS</h5>
//                             ${conteudo}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `
// }


function videos(img1, img2, description) {
    return `
    
        <div class="card" style="max-width: 18rem;">
            <img src="/images/${img1}.jpg" class="card-img-top" alt="...">
            <img src="/Media/${img2}.png" class="img_play " alt="">
            <div class="card-body">
                <p class="card-text">${description}</p>
            </div>
        </div>
    `
}

var videoRender = document.querySelector(".liste")

videoRender.innerHTML = videos(
    "landing-img",
    "play",
    "Some quick example text to build on the card title and make up the bulk of the card's content."
) +
videos(
    "landing-img",
    "play",
    "Some quick example text to build on the card title and make up the bulk of the card's content."
) +
videos(
    "landing-img",
    "play",
    "Some quick example text to build on the card title and make up the bulk of the card's content."
) +
videos(
    "landing-img",
    "play",
    "Some quick example text to build on the card title and make up the bulk of the card's content."
) +
videos(
    "landing-img",
    "play",
    "Some quick example text to build on the card title and make up the bulk of the card's content."
) +
videos(
    "landing-img",
    "play",
    "Some quick example text to build on the card title and make up the bulk of the card's content."
)


var firstCarte = document.querySelector("#containerTopMusic")

firstCarte.innerHTML = 
    creerCarte(
        1,
        "Titre de la musique"
    ) +
    creerCarte(
        2,
        "Titre de la musique"
    ) +
    creerCarte(
        3,
        "Titre de la musique"
    ) + 
    creerCarte(
        4,
        "Titre de la musique"
    ) +
    creerCarte(
        5,
        "Titre de la musique"
    )

var carte = document.querySelector(".actualitesGauche")

carte.innerHTML =
        creerCarte2(
            "bg",
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        ) +
        creerCarte2(
            "bg",
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        ) +
        creerCarte2(
            "bg",
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        )

// document.querySelector("#cards").innerHTML = outSideCard(
//     insideCard(
//         "bg",
//         "Card titleryjrjjjrjryjyjjyrtj"
//     )
// )
        
// var mySong = [document.getElementById("mySong1"),document.getElementById("mySong2"),document.getElementById("mySong3")];

// var icon = [document.getElementById("icon1"),document.getElementById("icon2"),document.getElementById("icon3")];


// for(let i=0; i<=11; i++){

//     icon[i].onclick = () => {

//         if (mySong[i].paused) {
//             mySong[i].play();
//             icon.src = "Media/pause.png"
//         } else {
//             mySong[i].pause();
//             icon.src = "Media/play.png"
//         }
//     }
        
// }
