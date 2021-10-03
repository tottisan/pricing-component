const toggleCheckbox = document.querySelector("#toggle");
const basic = document.querySelector("#basic_price");
const professional = document.querySelector("#professional_price");
const master = document.querySelector("#master_price");

toggleCheckbox.addEventListener("click", () => {
  toggle();
});

const toggle = () => {
  if (toggleCheckbox.checked === true) {
    monthly();
  } else {
    annually();
  }
};

const annually = () => {
  basic.textContent = "$ 199.99";
  professional.textContent = "$ 249.99";
  master.textContent = "$ 399.99";
};

const monthly = () => {
  basic.textContent = "$ 19.99";
  professional.textContent = "$ 24.99";
  master.textContent = "$ 39.99";
};
