canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");

car_racing_game_image_array=["racing.jpg"];
var random_number=Math.floor(Math.random()*5);
console.log(random_number);

car_width=100;
car_height=90;

car_x=10;
car_y=10;

car_width2=100;
car_height2=90;

car_x2=10;
car_y2=120;

background_image=car_racing_game_image_array[random_number];
console.log("background_image="+background_image)
car_image="car1.png";
car_image2="car2.png";

function plus(){
    imgtag=new Image();
    imgtag.onload=uploadBackground;
    imgtag.src=background_image;

    carimgtag=new Image();
    carimgtag.onload=uploadcar;
    carimgtag.src=car_image;

    carimgtag2=new Image();
    carimgtag2.onload=uploadcar2;
    carimgtag2.src=car_image2;

}

function uploadBackground(){
    ctx.drawImage(imgtag,0,0,canvas.width,canvas.height);
}

function uploadcar(){
    ctx.drawImage(carimgtag,car_x,car_y,car_width,car_height);
}

function uploadcar2(){
    ctx.drawImage(carimgtag2,car_x2,car_y2,car_width2,car_height2);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
key_pressed=e.keyCode;
console.log(key_pressed)

if(key_pressed=='38')
     up();
console.log("up");

if(key_pressed=='40'){
    down();
    console.log("down");
}
if(key_pressed=='37'){
    left();
    console.log("left");
}
if(key_pressed=='39'){
    right();
    console.log("right");
}
if(key_pressed=='18'){
    alt();
    console.log("alt");
}
if(key_pressed=='91'){
    ctl();
    console.log("ctl");
}
if(key_pressed=='27'){
    esc();
    console.log("esc");
}
if(key_pressed=='65'){
    a();
    console.log("a");
}
if(key_pressed=='66'){
    b();
    console.log("b");
}
if(key_pressed=='67'){
    c();
    console.log("c");
}
if(key_pressed=='68'){
    d();
    console.log("d");
}
if(key_pressed=='69'){
    e();
    console.log("e");
}
if(key_pressed=='70'){
    f();
    console.log("f");
}
if(key_pressed=='71'){
    g();
    console.log("g");
}
if(key_pressed=='72'){
    h();
    console.log("h");
}
if(key_pressed=='73'){
    i();
    console.log("i");
}
if(key_pressed=='74'){
    j();
    console.log("j");
}
if(key_pressed=='75'){
    k();
    console.log("k");
}
if(key_pressed=='76'){
    l();
    console.log("l");
}
if(key_pressed=='77'){
    m();
    console.log("m");
}
if(key_pressed=='78'){
    n();
    console.log("n");
}
if(key_pressed=='79'){
    o();
    console.log("o");
}
if(key_pressed=='80'){
    p();
    console.log("p");
}
if(key_pressed=='81'){
    q();
    console.log("q");
}
if(key_pressed=='82'){
    r();
    console.log("r");
}
if(key_pressed=='83'){
    s();
    console.log("s");
}
if(key_pressed=='84'){
    t();
    console.log("t");
}
if(key_pressed=='85'){
    u();
    console.log("u");
}
if(key_pressed=='86'){
    v();
    console.log("v");
}
if(key_pressed=='87'){
    w();
    console.log("w");
}
if(key_pressed=='88'){
    x();
    console.log("x");
}
if(key_pressed=='89'){
    y();
    console.log("y");
}
if(key_pressed=='90'){
    z();
    console.log("z");
}
}
