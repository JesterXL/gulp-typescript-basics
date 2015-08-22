import Person = require('./Person');
class Gladiator extends Person
{
	attack()
	{
		super.attack();
		console.log("... and Gladiator attack!!");
	}
}
export = Gladiator;