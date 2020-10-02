class drop {
    constructor(x, y,r) {

        var options ={
            restitution:0.4,
            friction:1.0
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);
        this.image = loadImage("drop.png");
        World.add(world, this.body);

    }
    display() {

        if(this.body!==null) {
            var pos = this.body.position;
            var angle = this.body.angle;

            push();
            translate(pos.x, pos.y);
            rotate(angle);
            //imageMode(CENTER);
            noStroke();
            imageMode(RADIUS);
            image(this.image,0, 0, this.r,this.r);
        
            if(this.body.position.y>930) {
                this.body = null;
            }
            pop();
        }
    }

};