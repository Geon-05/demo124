let id_pass = false;

window.addEventListener("load", function () {
  btn_id_check.addEventListener("click", id_check);
  btn_id_change.addEventListener("click", id_change);

  home.addEventListener("click", go_home);
});

let id_check = function () {
  let id_input = document.querySelector("#id");
  let id_info = document.querySelector("#id_info");
  let regExp = /^[a-zA-Z0-9]{5,12}$/;

  if (id_input.value == "") {
    alert("아이디를 입력하세요.");
    id_pass = false;
  } else if (!regExp.test(id_input.value)) {
    alert("아이디는 영문과 숫자만 입력가능합니다.\n5~12자리인지 확인하세요.");
    id_pass = false;
  } else {
    alert("사용가능한 아이디입니다.");
    id_pass = true;
    document.getElementById("id").readOnly = true;
    id_info.innerHTML =
      "입력이 비활성화 되었습니다.<br>수정을 원하시면 아이디바꾸기 버튼을 누르세요.";
    id_info.style.color='red';
  }
};

let id_change = function(){
  let id_info = document.querySelector("#id_info");

  id_pass = false;
  document.getElementById("id").readOnly = false;
  id_info.innerHTML =
      "입력이 활성화 되었습니다.";
      id_info.style.color='blue';
}

let go_home = function () {
  let res = confirm("정말 홈으로 이동합니까?");
  if (res == true) {
    location.href = "/";
  } else {
    return;
  }
};
