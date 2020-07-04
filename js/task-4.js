const credits = 23580;
const pricePerDroid = 3000;
const ordered = prompt("Сколько дроидов хотите купить");

if (ordered === null) {
  console.log("Отменено пользователем!");
} else {
  const totalPrice = ordered * pricePerDroid;

  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету");
  } else {
    console.log(
      `Вы купили ${ordered} дроидов, на вашем счету осталось ${
        credits - totalPrice
      } кредитов.`
    );
  }
}
