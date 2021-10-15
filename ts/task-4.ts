const credits: number = 23580;
const pricePerDroid: number = 3000;
const ordered: string | null = prompt('Сколько дроидов хотите купить');

if (ordered === null) {
  console.log('Отменено пользователем!');
} else {
  const totalPrice = +ordered * pricePerDroid;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету');
  } else {
    console.log(
      `Вы купили ${ordered} дроидов, на вашем счету осталось ${
        credits - totalPrice
      } кредитов.`
    );
  }
}

export {};
