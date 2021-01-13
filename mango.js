class Mango{
    constructor(x,y,radius){
    var option = {
        isStatic:true,
        restitution:0,
        friction:1
        }

        this.body = Bodies.circle(x,y,radius,option);
        this.radius = radius;
        this.image = loadImage("mango.png");
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
        image(this.image,0,0,45,45);
        pop();
    }
}