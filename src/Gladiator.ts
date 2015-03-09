import PersonModule = require('./Person');
export class Gladiator extends PersonModule.Person
{
	attack()
	{
		super.attack();
		console.log("... and Gladiator attack!!");
	}
}