// preview.js
// (C) 2019 Spez Inc. Some Rights Reserved.

// Get Objects
var trackname = document.getElementById("trackname");
var artist = document.getElementById("artistname");
var trackdemo = document.getElementById("trackdemo");
var trackimage = document.getElementById("trackimage");
var playpause = document.getElementById("playpause");

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function settrack() {
	trackname.innerHTML = findGetParameter("track");
	artist.innerHTML = findGetParameter("artist");
	trackdemo.src = "../data/" + findGetParameter("artist") + "-" + findGetParameter("track") + "/track.mp3"
	trackimage.src = "../data/" + findGetParameter("artist") + "-" + findGetParameter("track") + "/track.png"
	document.title = findGetParameter("artist") + " - " + findGetParameter("track") + " | SpezTunes Store"
}

function playaudio() {
	trackdemo.play();
	playpause.innerHTML = "Pause"
	playpause.setAttribute("onclick", "pauseaudio();");
}

function pauseaudio() {
	trackdemo.pause();
	playpause.innerHTML = "Play"
	playpause.setAttribute("onclick", "playaudio();");
}