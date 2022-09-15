const birthDate = document.querySelector("#date-of-birth");

const luckyNum = document.querySelector("#lucky-number");

const checkBtn = document.querySelector("#check-btn");

const outputBox = document.querySelector("#output-box");

checkBtn.addEventListener("click", checkIsBirthdayLucky);

function checkIsBirthdayLucky() {
  const dob = birthDate.value;
  const sum = calculateSum(dob);
  if (sum && dob) compareValue(sum, luckyNum.value);
  else outputBox.innerHTML = "Please enter both the fields! 😡";
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;

  for (let i = 0; i < dob.length; i++) {
    sum += Number(dob.charAt(i));
  }
  return sum;
}

function compareValue(sum, luckyNum) {
  if (sum % luckyNum === 0) {
    outputBox.innerText = "Your birthday is lucky! 🚀";
  } else {
    outputBox.innerText = "Your birthday is not lucky! 😔";
  }
}
