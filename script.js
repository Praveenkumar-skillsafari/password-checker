let passWord = document.querySelector("#myPassword");
let show = document.querySelector(".show");
let strengthMeter = document.querySelector(".strengthMeter");
let text = document.querySelector(".text");

show.addEventListener("click", () => {
  if (passWord.type === "password") {
    passWord.setAttribute("type", "text");
    show.innerText = "hide";
  } else if (passWord.type === "text") {
    passWord.setAttribute("type", "password");
    show.innerText = "show";
  }
});

let weak = /[a-zA-Z]/;
let medium = /\d+/;
let strong = /.[!,@,#,$,%,^,&,*,_,-,+,~,(,)]/;

passWord.addEventListener("input", () => {
  let passWordVal = passWord.value;

  if (
    strong.test(passWordVal) &&
    weak.test(passWordVal) &&
    medium.test(passWordVal) &&
    passWordVal.length >= 7
  ) {
    text.innerText = " Strong Password";
    text.style.color = "green";
    strengthMeter.style.backgroundColor = "green";
    strengthMeter.style.width = "100%";
  } else if (
    (weak.test(passWordVal) && medium.test(passWordVal)) ||
    (strong.test(passWordVal) && passWordVal.length >= 5)
  ) {
    text.innerText = " Medium Range Password ";
    text.style.color = "orange";
    strengthMeter.style.backgroundColor = "orange";
    strengthMeter.style.width = "65%";
  } else if (
    weak.test(passWordVal) ||
    medium.test(passWordVal) ||
    strong.test(passWordVal) ||
    passWordVal.length >= 1
  ) {
    text.innerText = "Password is Too-Weak";
    text.style.color = "red";
    strengthMeter.style.backgroundColor = "red";
    strengthMeter.style.width = "30%";
  } else {
    text.innerText = "Enter Password";
    text.style.color = "white";
    strengthMeter.style.backgroundColor = "transparent";
    strengthMeter.style.width = "0%";
  }
});
