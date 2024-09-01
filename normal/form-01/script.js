const container = document.querySelector('.container');
const signUpBtn = document.querySelector('.bg-btn');

signUpBtn.addEventListener("click", () => {
  console.log('Click');
  container.classList.toggle("change");
});