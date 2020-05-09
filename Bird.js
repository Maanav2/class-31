class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory=[];
    this.image1 = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.position.x>210 && this.body.velocity.x>10){
      var positions=[this.body.position.x,this.body.position.y];
      this.trajectory.push(positions);
    }
   
    for(var i=0;i<this.trajectory.length;i=i+1){
      image(this.image1,this.trajectory[i][0],this.trajectory[i][1])
    }
    
    
  }
}
