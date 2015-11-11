function Frisbee(color){
	this.color = color;
	this.lost = false;
}

Frisbee.prototype.isABone = function(){
	return false;
}

Frisbee.prototype.gotStuckInATree = function(){
	this.lost = true;
}