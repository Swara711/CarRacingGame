canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var rover_x= 10;
var rover_y = 10;

var car1 = "empty";
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

var car2 = "empty";
car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;
background_image = "car_racing_track.jpg";

function add(){
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

car1_imgTag = new Image();
car1_imgTag.onload = uploadcar1;
car1_imgTag.src = car1_image;

car2_imgTag = new Image();
car2_imgTag.onload = uploadcar2;
car2_imgTag.src = car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x,car1_y, car1_width, car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed= e.keyCode;
    console.log(keypressed);
    
    if(keypressed == '38'){
        up();
        console.log("up");
    } 
    if(keypressed == '40'){
        down();
        console.log("down");
    }
    if(keypressed == '37'){
        left();
        console.log("left");
    }
    if(keypressed == '39'){
        right();
        console.log("right");
    }

    if(keypressed == '87'){
        w();
        console.log("up");
    } 
    if(keypressed == '65'){
        a();
        console.log("left");
    }
    if(keypressed == '83'){
        s();
        console.log("down");
    }
    if(keypressed == '68'){
        d();
        console.log("right");
    }
    }
    function up(){
        if(rover_y>=0){
            rover_y -=10;
            console.log("when up arrow is pressed =" + rover_x + "-" + rover_y);
            uploadBackground();
            uploadcar1();
        }
    }
    function down(){
        if(rover_y<=500){
        rover_y +=10;
        console.log("when down arrow is pressed =" + rover_x + "-" + rover_y);
        uploadBackground();
        uploadcar1();
        }
    }
    function right(){
        if(rover_x<=700){
            rover_x +=10;
            console.log("when right arrow is pressed =" + rover_x + "-" + rover_y);
            uploadBackground();
            uploadcar1();
        }
    }
    function left(){
        if(rover_x>=0){
            rover_x -=10;
            console.log("when left arrow is pressed =" + rover_x + "-" + rover_y);
            uploadBackground();
            uploadcar1();
        }
    }
    
    
    
    function w(){
        if(rover_y>=0){
            rover_y -=10;
            console.log("when w is pressed =" + rover_x + "-" + rover_y);
            uploadBackground();
            uploadcar2();
        }
    }
    function s(){
        if(rover_y<=500){
        rover_y +=10;
        console.log("when s is pressed =" + rover_x + "-" + rover_y);
        uploadBackground();
        uploadcar2();
        }
    }
    function d(){
        if(rover_x<=700){
            rover_x +=10;
            console.log("when d is pressed =" + rover_x + "-" + rover_y);
            uploadBackground();
            uploadcar2();
        }
    }
    function a(){
        if(rover_x>=0){
            rover_x -=10;
            console.log("when a is pressed =" + rover_x + "-" + rover_y);
            uploadBackground();
            uploadcar2();
        }
    }
    