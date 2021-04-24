class Stone{
	constructor(x,y,width, height)
	{ var options = {
		restituition : 0.8,
		friction : 0.9,
		density : 12
	}
	// assign options to the stone 
		this.x=x;
		this.y=y;
		this.width = width;
        this.height = height;
		this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos = this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			//draw the rectangle here to display the stone
			rect(0,0,this.width, this.width)
			pop()
    }
}