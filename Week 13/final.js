function changeSize() {
    var x = document.createElement('style');
    x.innerHTML = "h2 {font-size: 30px}";
    document.body.appendChild(x);
}

function changeFont() {
    var x = document.createElement('style');
    x.innerHTML = "h2 {font-family: Courier}";
    document.body.appendChild(x);
}

function transition1() {
    document.getElementById("transition1").style.transition = "all 1s";
} 

function shiftLeft() {
    document.getElementById("alignContent").align = "left"
}

  function shiftCenter() {
    document.getElementById("alignContent").align = "center";
}

  function shiftRight() {
    document.getElementById("alignContent").align = "right";
}


function parseMovies() {
    var names = [];
    for (i = 0; i < 5; i++) {
        names[i] = prompt("List five of your all time favorite movies!");
        localStorage.setItem("names", JSON.stringify(names));
    }
}

function flipIt() {
    document.getElementById("transform1").style.transform = "rotate(0deg)";
}

function flipItUpsideDown() {
    document.getElementById("transform2").style.transform = "rotate(180deg)";
}

function flipItRandomly() {
    document.getElementById("transform3").style.transform = "rotate(0deg)";
}

function retrieveMovies() {
    document.getElementById("localStorage").innerHTML = "Your favorite movies are: " + JSON.parse(localStorage.getItem("names"));
}

function parseVideos() {
    var videos = [];
    for (i = 0; i < 3; i++) {
        videos[i] = prompt("List three of your favorite YouTube Video topics to search!");
        localStorage.setItem("videos", JSON.stringify(videos));
    }
}

function retrieveVideos() {
    document.getElementById("localStorage2").innerHTML = "Your favorite YouTube video topics are " + JSON.parse(localStorage.getItem("videos"));
}

function clearStorage() {
    localStorage.clear();
}