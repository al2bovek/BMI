const categories = {
    Underweight: 18.5,
    Normal: 24.9,
    Overweight: 29.9,
    Obese: 30,
}

const weigth = document.querySelector("#weigth");
const height = document.querySelector("#height");
const male = document.querySelector("#male");
const female = document.querySelector("#female");
const result = document.querySelector("#result");
const bmi = document.querySelector("#bmi");

let checked;
let value;
male.addEventListener("click", () => checked = 'male');
female.addEventListener("click", () => checked = "female");

const getBmi = (e) => {
    e.preventDefault();
    if (!weigth.value) {
        weigth.value = 88;
    }
     if (!height.value) {
        height.value = 188;
    }
    checked === "male" ? value = male.value : value = female.value;
    value >= 0.04 && value <= 1.06 ? value = value : value = 1;
    const result = Math.round(weigth.value / height.value ** 2 * 10000 * value);
   if (result < categories.Underweight || result > categories.Obese) {
    bmi.style.color = "red";
    alert("Underweight or Obese");
   } else if(result < categories.Normal && result > categories.Underweight){
     bmi.style.color = "green";
    alert("Normal");
   } else {alert("Overweight")};
    bmi.textContent = result;

    male.value = "0.965";
    female.value = "1.045";

}
submit.addEventListener("click", getBmi);

