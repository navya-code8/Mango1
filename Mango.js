class Mango{

    constructor(x,y,w,h){

        this.image = loadImage("sprites/mango.png");
        this.body = Bodies.rectangle(x,y,w,h, {isStatic: true, restitution:0, friction: 1});
        this.width = w;
        this.height = h;
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);


    }

}