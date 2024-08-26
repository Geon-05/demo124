let id_pass = false;
let pw_pass = false;
let id_regExp = /^[a-zA-Z0-9]{5,12}$/;
let pw_regExp = /^[a-zA-Z0-9]{5,12}$/;

window.addEventListener("load", function () {
  btn_id_check.addEventListener("click", id_check);
  btn_id_change.addEventListener("click", id_change);

  btn_home.addEventListener("click", go_home);
  btn_login.addEventListener("click", go_login);

  input_password_check.addEventListener("keyup", password_check);
});

let password_check = function () {
  let password_value = document.querySelector("#input_password").value;
  let password_check_value = document.querySelector(
    "#input_password_check"
  ).value;
  let pw_info = document.querySelector("#pw_info");

  if(!pw_regExp.test(password_value)){
    alert("비밀번호는 영문과 숫자만 입력가능합니다.\n5~12자리인지 확인하세요.");
    pw_pass = false;
  } else if (password_value != password_check_value) {
    pw_info.innerHTML = "비밀번호가 다릅니다.";
    pw_pass = false;
  } else if (password_value == password_check_value) {
    pw_info.innerHTML = "비밀번호가 확인되었습니다!<br>비밀번호 입력이 비활성화됩니다.";
    document.getElementById("input_password").readOnly = true;
    pw_pass = true;
  }
};

let id_check = function () {
  let id_input = document.querySelector("#id");
  let id_info = document.querySelector("#id_info");

  if (id_input.value == "") {
    alert("아이디를 입력하세요.");
    id_pass = false;
  } else if (!id_regExp.test(id_input.value)) {
    alert("아이디는 영문과 숫자만 입력가능합니다.\n5~12자리인지 확인하세요.");
    id_pass = false;
  } else {
    alert("사용가능한 아이디입니다.");
    id_pass = true;
    document.getElementById("id").readOnly = true;
    id_info.innerHTML =
      "입력이 비활성화 되었습니다.<br>수정을 원하시면 아이디바꾸기 버튼을 누르세요.";
    id_info.style.color = "red";
  }
};

let id_change = function () {
  let id_info = document.querySelector("#id_info");

  id_pass = false;
  document.getElementById("id").readOnly = false;
  id_info.innerHTML = "입력이 활성화 되었습니다.";
  id_info.style.color = "blue";
};

let go_home = function () {
  let res = confirm("정말 홈으로 이동합니까?");
  if (res == true) {
    location.href = "/";
  } else {
    return;
  }
};

let go_login = function () {
  let res = confirm("정말 로그인으로 이동합니까?");
  if (res == true) {
    location.href = "/login.html";
  } else {
    return;
  }
};
