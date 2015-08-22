class Person
{
	firstName = "Cow";
	
	attack()
	{
		console.log("Yo!");
		this.firstName = "Jesse";
	}
}

export = Person;