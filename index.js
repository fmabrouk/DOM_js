var bg = document.getElementById('particles-js');
/*ajout un evenement*/
/*fonction call back*/
/*
document.addEventListener("click", function() {
    alert("tu as bien cliqué");
});
*/

/*j'appuie sur une lettre ca change la couleur de fond*/
document.addEventListener("keydown", function(event) {
    bg.style.backgroundColor = getRandomColor();
    /*lettre sur la quelle j'appuie*/
    var key = event.key;
    playMusic(key);
});

function playMusic(key) {
    switch (key) {
        case "d":
            /*audio un objet vree deja par js*/
            var audio = new Audio("Kick1.wav");
            audio.play();
            break;
        case "e":
            /*audio un objet vree deja par js*/
            var audio = new Audio("kick.mp3");
            audio.play();
            break;
        case "a":
            /*audio un objet vree deja par js*/
            var audio = new Audio("kick2.mp3");
            audio.play();
            break;
        case "z":
            /*audio un objet vree deja par js*/
            var audio = new Audio("Clap1.wav");
            audio.play();
            break;
    }
}

/*prend couleur aleatoirement*/
function getRandomColor() {
    /*Hexadecimal*/
    var lettres = "0123456789ABCDEF";
    var color = "#";
    /*6 la taille de couleur en hexadecimal*/
    for (var i = 0; i < 6; i++) {
        color += lettres[Math.floor(Math.random() * lettres.length)];
    }
    return color;
}