describe("Dog", function(){
	var hachi;
	var redFrisbee;
	var blueFrisbee;

	beforeEach(function(){
		hachi = new Dog("Hachi");
		redFrisbee = new Frisbee('red');
		blueFrisbee = new Frisbee('blue')
	})

	it("should be define a new dog object", function(){
		expect(hachi).toBeDefined();
	})

	it("should name the dog", function(){
		expect(hachi.name).toEqual("Hachi");
	})

	it("should instantiate a new dog that is 1 years old", function(){
		expect(hachi.age).toBeGreaterThan(0);

		expect(hachi.age).toEqual(1);
	})

	it("should not have a nickname yet", function(){

		expect(hachi.nickname).toBeUndefined();

		expect(hachi.nickname).toEqual(undefined)
	})

	it("should have no cat friends", function(){

		expect(hachi.catFriends).toBeNull();

	})

	it("should have owners", function(){

		expect(hachi.owners.length).toBeGreaterThan(0)

		expect(hachi.owners.length).toBe(4)
		expect(hachi.owners.length).toBeLessThan(5)
	})

	describe(".giveNickname()", function(){

		beforeEach(function(){
			hachi.giveNickname("man's bf");
		})

		it("should assign a nickname to the dog", function(){

			expect(hachi.nickname).toBeDefined();
		})

		it("should give a nickname that isn't the same as the dog's name", function(){

			expect(hachi.age !== hachi.nickname)

			expect(hachi.nickname).not.toMatch(hachi.name)
			//when using not, you first call not followed by the matched you would normally want to use prepended with 'to'
		})

	})

	describe(".fetch", function(){

			it("should return a frisbee", function(){
				expect(hachi.fetch(redFrisbee)).toEqual(redFrisbee)
			})

			it("should not return the frisbee that wasn't tossed", function(){
				expect(hachi.fetch(redFrisbee)).not.toBe(blueFrisbee)
			})

			it("should not return a frisbee (return null) if the frisbee was thrown into a tree", function(){
				redFrisbee.gotStuckInATree();
				expect(hachi.fetch(redFrisbee)).toBe(null)
			})

	})

	describe(".fetch() spy", function(){

		beforeEach(function(){
			spyOn(hachi, 'fetch')
		})

		it("tracks whether or not you told dog the to fetch", function(){
			expect(hachi.fetch.calls.any()).toEqual(false)
		})

		it("increments the fetchCount  when you call fetch", function(){
			hachi.fetch();
			expect(hachi.fetch.calls.any()).toEqual(true)
		})
	})

	describe(".bark()", function(){

		it("should make a sound", function(){
			expect(hachi.bark('arf')).toBe('arf')
		})

		it("should not meow when the you tell it to bark", function(){
			expect(hachi.bark('bark')).not.toEqual('meow')
		})

	})

})

