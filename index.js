const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = '$*ù!:;,.?/§µ%£¨^&"()-_';
const rangeValue = document.getElementById("password-length");
const output = document.getElementById("password-output");

const generatePassword = () => {
  let data = [];
  let password = "";
  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);
  if (data.length === 0) {
    alert("Sélectionner des critères !");
    return;
  }
  for (let i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  output.value = password;

  output.select();
  document.execCommand("copy");

  generateButton.textContent = "Copié";

  setTimeout(() => {
    generateButton.textContent = "Générer MDP";
  }, 2000);
};
generateButton.addEventListener("click", generatePassword);
