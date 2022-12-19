const canvas = document.querySelector('#game-container');
const ctx =canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerheigth;

ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 30, 0, Math.PI * 2, false);
ctx.fillStyle = "red";
ctx.fill();

class Entity{
    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.radius= radius;
        this.color ="red";

    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y,this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();

    }
}

class Player extends Entity{
    constructor(x,y,radius){
        super(x,y,radius);
        this.color= this.color;

    }
}
const player= new Player(canvas.width /2, canvas.height/2,10, "red");
player.draw();
