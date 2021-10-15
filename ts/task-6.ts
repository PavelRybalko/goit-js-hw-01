let input: string | null;
let total = 0;

do {
  input = prompt('Введите число');
  if (input === null) {
    break;
  }
  const notANumber = Number.isNaN(input);
  if (notANumber) {
    alert('Было введено не число, попробуйте ещё раз');
    continue;
  }
  total += +input;
} while (input !== null);

alert(`Общая сума чисел равна ${total}`);
