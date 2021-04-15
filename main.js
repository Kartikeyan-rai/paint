var canvas=document.getElementById("my-canvas");
var ctx=canvas.getContext("2d");
var color="red";
var line_width=2;
var last_x,last_y;
var mouseEvent="empty";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{mouseEvent="md";
color=document.getElementById("color").value;
line_width=document.getElementById("line-width").value;
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{var current_x=e.clientX-canvas.offsetLeft;
var current_y=e.clientY-canvas.offsetTop;
if (mouseEvent=="md")
{console.log("Last position of x and y coordinates = ");
console.log("x = " + last_x + "y = " + last_y);
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=line_width;
ctx.arc(last_x,last_y,30,0,2 * Math.PI);
console.log("current position of x and y coordinates = ");
console.log("x = " + current_x + "y = " + current_y);
ctx.stroke();}
last_x=current_x;
last_y=current_y;
}
canvas.addEventListener("mouseup",my_mouse_up)
function my_mouse_up(e)
{mouseEvent="mu"}
function clear()
{ctx.clearRect(0,0,canvas.width,canvas.height)};