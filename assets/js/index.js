'use strict';

const ball = document.getElementById("ball");



let circle_x = 10;
let circle_y = 10;


let move_x = 2;
let move_y = -2;

let width = document.body.offsetWidth;
let height= document.body.offsetHeight;

let border = "4px solid yellow";

function refresh() {
    document.getElementById("ball").remove();
    const ball = document.createElement("div");
    ball.setAttribute("id", "ball");
    ball.style.right = `${circle_x}px`;
    ball.style.top = `${circle_y}px`;
    ball.style.border = border;

    const img = document.createElement("img");
    img.setAttribute("src", "assets/images/Artur.JPG");
    img.setAttribute("alt", "Artur");
    ball.appendChild(img);

    document.body.appendChild(ball);

}


function move() {
    circle_x = circle_x + move_x;
    circle_y = circle_y + move_y;

    if(circle_x + document.getElementById("ball").offsetWidth > width) {
        circle_x = width - document.getElementById("ball").offsetWidth;
        move_x = -move_x;
        border = "4px solid red"
    }
    if(circle_y + document.getElementById("ball").offsetHeight > height) {
        circle_y = height - document.getElementById("ball").offsetHeight;
        move_y = -move_y;
        border = "4px solid green"
    }
    if(circle_x < 0) {
        circle_x = 0;
        move_x = -move_x;
        border = "4px solid blue";

    }
    if(circle_y < 0) {
        circle_y = 0;
        move_y = -move_y;
        border = "4px solid yellow";

    }
    refresh();
}

window.onresize = function() {
    width = document.body.offsetWidth;
    height= document.body.offsetHeight;
};

setInterval(move, 20);
