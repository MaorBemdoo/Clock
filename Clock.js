

const main = document.getElementsByTagName("main")[0];
const load = document.getElementById("clockLoad")
const bubble = document.getElementById("_b1")
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var div = document.getElementById("_div")
var session = document.getElementsByClassName("session")[0]

window.addEventListener("load", () => {
    load.classList.add("d-none")
    main.classList.remove("d-none")
    bubble.classList.remove("d-none")
})

var clock = () => {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s= date.getSeconds();
    if(h > 12){
        session.innerHTML = "PM"
        session.style.width = "200px"
        h = h - 12
        if(h < 10){
            h = "0" + h
        } else{
            h
        }
    } else if(h == 12){
        session.innerHTML = "NOON"
        session.style.width = "400px"
    } else if(h == 0){
        h = 00
        session.innerHTML = "AM"
    } else if(h < 12){
        if(h < 10){
            h ="0" + h
        }
        session.innerHTML = "AM"
        session.style.width = "200px"
    } else{
        session.innerHTML = "AM"
    }
    if(m < 10){
        m = "0" + m
    }
    if(s < 10){
        s = "0" + s
    }
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}
var Interval = setInterval(clock, 1000)