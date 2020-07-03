const country = prompt('Введите страну');
let fixedCountry ="";

for(let i=0; i<country.length; i+=1){

if (i===0){
	fixedCountry += country.charAt(i).toUpperCase();
	continue;
}
else {
	fixedCountry += country.charAt(i).toLowerCase();	
	}
}

let cost;

switch (fixedCountry) {
	case 'Китай': 
	cost = 100;
	break;
	case 'Чили': 
	cost = 250;
	break;
	case 'Австралия': 
	cost = 170;
	break;
	case 'Индия': 
	cost = 80;
	break;
	case 'Ямайка': 
	cost = 120;
	break;
	default: alert('В вашей стране доставка недоступна');
}

if(cost !== undefined){
console.log(`Доставка в ${fixedCountry} будет стоить ${cost} кредитов`);
}
