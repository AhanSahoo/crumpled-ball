class Box{

constructor(x,y,width,height){

var boxPropertyChange ={

    isStatic : true

}
this.boxBody=Bodies.rectangle(x,y,width,height,boxPropertyChange)
World.add(world,this.boxBody)
this.width = width
this.height = height 

}
display(){
push()
var position = this.boxBody.position
fill("green")
rectMode(CENTER)
rect(position.x,position.y,this.width,this.height)
pop()


}



}