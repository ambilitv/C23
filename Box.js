class Box{

    constructor(x,y,width,height){
var options={
    restitution: 0.8
}
 //this.width =width;
 //this.height =height;     
this.body = Bodies.rectangle(x,y,width,height,options);
this.width =width;
 this.height =height;
World.add(world,this.body)
    }

    display(){
      var pos = this.body.position;
      var angle1 = this.body.angle;
      console.log(this.body.angle);
      push();
      translate(pos.x,pos.y);
      rotate(angle1);
        rectMode(CENTER) 
        fill(255);
       rect(0,0,this.width,this.height);
       pop();
       
    }
}