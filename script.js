const wrapper = document.querySelector(".wrapper");
qrInput = wrapper.querySelector(".form input");
generateBtn = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  // if the value is empty then return from here
  if (!qrValue) return;
  generateBtn.innerText = "Generating QR Code...";
  // getting a QR Code of user entered value using the qrserver
  // api and passing the api returned img src to qrImg
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  // console.log(qrValue);
  qrImg.addEventListener("load", () => {
    // once QR Code img loaded
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  });
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    wrapper.classList.remove("active");
  }
});
