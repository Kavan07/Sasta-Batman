class Umbrella {
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.x = x;
        this.y = y;
        this.r = r
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("images/images/WalkingFrame/walking_1.png", "images/images/WalkingFrame/walking_2.png", "images/images/WalkingFrame/walking_3.png", "images/images/WalkingFrame/walking_4.png", "images/images/WalkingFrame/walking_5.png", "images/images/WalkingFrame/walking_6.png", "images/images/WalkingFrame/walking_7.png", "images/images/WalkingFrame/walking_8.png");
    }
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,this.r,  this.r)
        pop();
    }
}