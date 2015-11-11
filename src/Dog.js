function Dog(name){
	this.name = name;
	this.age = 1;
	this.catFriends = null;
	this.owners = ["Papa Ngo", "Mama Ngo", "Harvey Ngo", "Sister Ngo"]
}


Dog.prototype.growOlder = function(){
	this.age++;
}

Dog.prototype.giveNickname = function(nickname){
	this.nickname = nickname;
}

Dog.prototype.fetch = function(frisbee){
	if(frisbee.lost){
		return null;
	}
	return frisbee;
}

Dog.prototype.bark = function(sound){
	return sound;
}