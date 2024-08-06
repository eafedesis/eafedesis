function checkInput() {
  const inputNumberBody = document.getElementById("inputNumber");
  const inputNumber = inputNumberBody.value;

  const now = new Date().getFullYear();
  const age = now - inputNumber;

  const result = document.getElementById("result");
  result.textContent = `YOU ARE ${age} YEARS OLD`;

  console.log("Checking input");
}
