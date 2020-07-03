let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const ordered = prompt('Сколько дроидов хотите купить');

if (ordered === null) {
	console.log('Отменено пользователем!');
	
} else {
	totalPrice = ordered * pricePerDroid;

	if (totalPrice > credits) {
		console.log('Недостаточно средств на счету');
	} else {
		credits = credits - totalPrice;
		console.log(`Вы купили ${ordered} дроидов, на вашем счету осталось ${credits} кредитов.`);
	}

}