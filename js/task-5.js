const country = prompt("Введите страну");
const china = 100;
const chile = 250;
const australia = 170;
const india = 80;
const jamaica = 120;

if (country !== null) {
  switch (country.toLowerCase()) {
    case "китай":
      console.log(`Доставка в ${country} будет стоить ${china} кредитов`);
      break;
    case "чили":
      console.log(`Доставка в ${country} будет стоить ${chile} кредитов`);
      break;
    case "австралия":
      console.log(`Доставка в ${country} будет стоить ${australia} кредитов`);
      break;
    case "индия":
      console.log(`Доставка в ${country} будет стоить ${india} кредитов`);
      break;
    case "ямайка":
      console.log(`Доставка в ${country} будет стоить ${jamaica} кредитов`);
      break;
    default:
      alert("В вашей стране доставка недоступна");
  }
}
