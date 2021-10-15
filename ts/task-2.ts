const total: number = 100;
const ordered: number = Number(prompt('Введите количество товаров'));

if (ordered > total) {
  console.log('На складе недостаточно товаров');
} else {
  console.log('Заказ оформлен с вами свяжется менеджер');
}

export {};
