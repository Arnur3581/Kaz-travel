AOS.init();

let btn = document.querySelector(".tours__btn");
btn.addEventListener("click", () => {
  let cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.toggle("hidden");
  }

  if (btn.textContent == "Смотреть еще") {
    btn.textContent = "Закрыть";
  } else {
    btn.textContent = "Смотреть еще";
  }
});
