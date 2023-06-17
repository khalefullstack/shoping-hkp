const URL = "http://localhost:3008";
let User = [];

async function init() {
  await renderData();
}
async function renderData() {
  let resData = await fetch(`${URL}/User`);
  let dataUser = await resData.json();
  User = dataUser;
  console.log(User);
  return dataUser;
}
const butLoginEle = document.querySelector(".butLogin");
butLoginEle.addEventListener("click", async function () {
  const EmailAddresEle = document.querySelector(".EmailAddres").value;
  const PassWordEle = document.querySelector(".PassWord").value;
  const saveEmail = User.find((info) => info.Email === EmailAddresEle); 
  const savePass = User.find((info) => info.PassWord === PassWordEle);
  const attEmailEle = document.querySelector(".attEmail");
  const attPassEle = document.querySelector(".attPass");
  if (saveEmail && savePass) {
    alert("Chúc mừng bạn đã đăng nhập thành công");
  } else if (EmailAddresEle == "" && PassWordEle == "") {
    attEmailEle.innerHTML = "Xin vui lòng nhập Email";
    attPassEle.innerHTML = "Xin vui lòng nhập password";
  } else if (EmailAddresEle == "") {
    attEmailEle.innerHTML = "Xin vui lòng nhập Email";
    attPassEle.innerHTML = "";
  } else if (PassWordEle == "") {
    attEmailEle.innerHTML = "";
    attPassEle.innerHTML = "Xin vui lòng nhập password";
  } else {
    alert("Email hoặc password không tồn tại");
  }
});
init();
