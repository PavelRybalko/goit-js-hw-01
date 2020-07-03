let input;
let total = 0;

do {
	input = prompt('Введите число');
	const notANumber = isNaN(input);
	if (notANumber){
		alert("Было введено не число, попробуйте ещё раз")
		continue;
	}
	total += Number(input);
}
while (input !==null);

alert(`Общая сума чисел равна ${total}`)