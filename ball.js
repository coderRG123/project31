class balls {
  constructor(x,y) {
    var options = {
      isStatic: true
  }
  this.body = Bodies.circle(x, y, 10, options);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    fill("white");
    ellipse(pos.x, pos.y, 10, 10);
}
};




