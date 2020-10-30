class Ground{

constructor(x,y,width,height){

var groundPropertyChange={

    isStatic : true 

}
this.groundBody=Bodies.rectangle(x,y,width,height,groundPropertyChange)
World.add(world,this.groundBody)
this.width = width
this.height = height
}
display(){
    push()
    var position = this.groundBody.position
    fill("brown")
    rectMode(CENTER)
    rect(position.x,position.y,this.width,this.height)
    pop()

}



}