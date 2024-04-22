const fps = 10;
let gameBoxs = document.querySelector("body .game-boxs").querySelectorAll("li");
let currentBoxIndex = 2;

setInterval(function() {
    for (var i = 0; i < gameBoxs.length; i++) {
        let gameBox = gameBoxs[i];
        let offset = document.querySelector(".game-boxs")
        if (!gameBoxs[0].classList.contains("current-box") && !gameBoxs[5].classList.contains("current-box")) {
            if (i < currentBoxIndex) {
                gameBox.classList.remove("current-box", "slide-rh", "slide-rf", "slide-lf");
                offset.classList.remove("slide-lf", "slide-rf");
                gameBox.classList.add("slide-lh");
            } else if (i > currentBoxIndex) {
                gameBox.classList.remove("current-box", "slide-lh", "slide-rf", "slide-lf");
                offset.classList.remove("slide-lf", "slide-rf");
                gameBox.classList.add("slide-rh");
            }
        } else {
            if (i < currentBoxIndex) {
                gameBox.classList.remove("current-box", "slide-rh", "slide-rf", "slide-lh");
                offset.classList.remove("slide-rf");
                gameBox.classList.add("slide-lf");
                offset.classList.add("slide-lf");
            } else if (i > currentBoxIndex) {
                gameBox.classList.remove("current-box", "slide-rh", "slide-lh", "slide-lf");
                offset.classList.remove("slide-lf");
                gameBox.classList.add("slide-rf");
                offset.classList.add("slide-rf");
            }
        }
        
        
    }
}, 1000 / fps);

setInterval(function() {
    for (var i = 0; i < gameBoxs.length; i++) {
        let gameBox = gameBoxs[i];
        if (gameBox.classList.length == 0) {
            if (gameBoxs[2].classList.contains("current-box")) {
                gameBoxs[2].classList.add("current-box");
            }
        }
        if (gameBox.matches(":hover")) {
            if (!gameBox.classList.contains("current-box")) {
                currentBoxIndex = i;
                gameBox.classList.remove(gameBox.classList[0]);
                gameBox.classList.add("current-box");
            }
        }
    }
}, 1000 / 2);

