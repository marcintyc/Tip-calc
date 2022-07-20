const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const error = document.querySelector(".error");
const countBtn = document.querySelector(".count");
const costInfo = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");

const check = () => {
	if (price.value == "" || people.value == "" || tip.value == 0) {
		error.textContent = "Uzupełnij wszystkie dane!";
		costInfo.style.display = "none";
	} else {
		error.textContent = " ";
		countBill();
	}
};

const countBill = () => {
	const newPrice = Number.parseFloat(price.value);
	const newPeople = Number.parseInt(people.value);
	const newTip = Number.parseFloat(tip.value);

	const sum = (newPrice + (newPrice * newTip)) / newPeople;
	costInfo.style.display = 'block';

	cost.textContent = sum.toFixed(2);
};

countBtn.addEventListener("click", showBill);
