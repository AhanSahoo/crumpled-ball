class Ball{

constructor(x,y,r){

    var ballPropertyChange={

        restitution : 0.3,
        friction : 0.5,
        density : 1.2

    }
    this.ballBody=Bodies.circle(x,y,r,ballPropertyChange)
    World.add(world,this.ballBody)
    this.radius = r
}
display(){
    push ()
    var position = this.ballBody.position
    var angle = this.ballBody.angle
    translate(position.x,position.y)
    rotate(angle)
    fill("blue")
    ellipseMode(CENTER)
    ellipse(0,0,this.radius,this.radius)
    pop ()

}


}