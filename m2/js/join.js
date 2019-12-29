const checkBox = document.getElementById("pol_allagree");
const btn = document.getElementById("btn1");
const chBox1 = document.getElementById("pol1_agree");
const chBox2 = document.getElementById("pol2_agree");
const chBox3 = document.getElementById("pol3_agree");

const allChkeck = e => {
  const checkValue = chBox1.checked || chBox2.checked || chBox3.checked;

  if (checkValue) {
    chBox1.checked = false;
    chBox2.checked = false;
    chBox3.checked = false;
    checkBox.checked = false;
  } else {
    chBox1.checked = true;
    chBox2.checked = true;
    chBox3.checked = true;
    checkBox.checked = true;
  }
};

const joinHandler = () => {
  const nesCheck = chBox1.checked && chBox2.checked;

  if (nesCheck) {
    alert("회원가입에 성공하였습니다.");
  } else {
    alert("필수약관 동의가 필요합니다.");
  }
};

init = () => {
  checkBox.addEventListener("click", allChkeck);
  btn.addEventListener("click", joinHandler);
};

init();
