let demo = document.querySelector("#demo");
let natija = prompt("To'plagan balingizni kiriting!");
if (natija < 80) {
  demo.textContent = "O'qishga kira olmadingiz!";
} else if ((natija > 80, natija < 100)) {
  let ask = prompt(
    "Siz super-kontrakti asosida talabalikka tavsiya qilindingiz, qancha byudjetingiz mavjud?"
  );
  if (ask >= 3000) {
    demo.textContent = "O'qishga qabul qilindingiz!";
  } else {
    demo.textContent = "Afsus, o'qishga kira olmadingiz!";
  }
} else if ((natija >= 100, natija < 150)) {
  let question = prompt(
    "Siz to'lov-kontrakti asosida o'qishga qabul qilindingiz, qancha byudjetingiz mavjud?"
  );
  if (question >= 2000) {
    demo.textContent = "O'qishga qabul qilindingiz!";
  } else {
    demo.textContent = "Afsus, o'qishga kira olmadingiz!";
  }
} else if ((natija >= 150, natija <= 180)) {
  demo.textContent = "Siz byudjet asosida talabalikka qabul qilindingiz!";
} else {
  demo.textContent = "Bunday bal to'plash imkonsiz!";
}
