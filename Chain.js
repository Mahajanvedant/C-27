class Chain{
constructor(b1,b2){
    var options={
        bodyA:b1,
        bodyB:b2,
        stiffness:0.05,
        Length:10
    
        }
   this.chain=Constraint.create(options);
    World.add(world, this.chain);
    
}
display(){
    strokeWeight(5);
    line (bird.body.position.x,bird.body.position.y,conlog.body.position.x,conlog.body.position.y);
}
}