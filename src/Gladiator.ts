/// <reference path="Person.ts" />
class Gladiator extends Person
{
	attack()
	{
		super.attack();
		console.log("... and Gladiator attack!!");
	}
}