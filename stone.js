class Stone{
    constructor(x,y,radius){
    var option = {
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
        }

        this.body = Bodies.circle(x,y,radius,option);
        this.radius = radius;
        this.image = loadImage("stone.png");
        World.add(world,this.body);
    }

    display()
    {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,35,35);
        pop();
    }
}