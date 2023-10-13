var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 이미지 그룹 1에 대한 숨김 함수와 이벤트 핸들러 등록 코드
const imageContainers1 = document.getElementById("imageContainers1");
const buttons1 = document.querySelectorAll(".Button1, .Button2, .Button3"); // 수정: 클래스 선택자 수정

function hideAllImages1() {
  imageContainers1.querySelectorAll("img").forEach((image) => {
    image.style.display = "none";
  });
}

hideAllImages1();

const firstImage1 = document.getElementById("image1");
firstImage1.style.display = "block";

buttons1.forEach((button) => {
  button.addEventListener("click", () => {
    hideAllImages1();
    const imageId = button.getAttribute("data-image"); // 수정: data-image 속성 사용
    const targetImage = document.getElementById(imageId);
    targetImage.style.display = "block";
  });
});

// 이미지 그룹 2에 대한 숨김 함수와 이벤트 핸들러 등록 코드
const imageContainers2 = document.getElementById("imageContainers2");
const buttons2 = document.querySelectorAll(".Button4, .Button5, .Button6"); // 수정: 클래스 선택자 수정

function hideAllImages2() {
  imageContainers2.querySelectorAll("img").forEach((image) => {
    image.style.display = "none";
  });
}

hideAllImages2();

const firstImage2 = document.getElementById("image4");
firstImage2.style.display = "block";

buttons2.forEach((button) => {
  button.addEventListener("click", () => {
    hideAllImages2();
    const imageId = button.getAttribute("data-image2"); // 수정: data-image2 속성 사용
    const targetImage = document.getElementById(imageId);
    targetImage.style.display = "block";
  });
});



const imageContainers3 = document.getElementById("imageContainers3");
const buttons3 = document.querySelectorAll(".Button7, .Button8, .Button9");

function hideAllImages3() {
  imageContainers3.querySelectorAll("img").forEach((image) => {
    image.style.display = "none";
  });
}

hideAllImages3();

const firstImage3 = document.getElementById("image7");
firstImage3.style.display = "block";

buttons3.forEach((button) => {
  button.addEventListener("click", () => {
    hideAllImages3();
    const imageId = button.getAttribute("data-image3");
    const targetImage = document.getElementById(imageId);
    targetImage.style.display = "block";
  });
});

const imageContainers4 = document.getElementById("imageContainers4");
const buttons4 = document.querySelectorAll(".Button10, .Button11, .Button12");

function hideAllImages4() {
  imageContainers4.querySelectorAll("img").forEach((image) => {
    image.style.display = "none";
  });
}

hideAllImages4();

const firstImage4 = document.getElementById("image10");
firstImage4.style.display = "block";

buttons4.forEach((button) => {
  button.addEventListener("click", () => {
    hideAllImages4();
    const imageId = button.getAttribute("data-image4");
    const targetImage = document.getElementById(imageId);
    targetImage.style.display = "block";
  });
});
const imageContainers5 = document.getElementById("imageContainers5");
const buttons5 = document.querySelectorAll(".Button13, .Button14, .Button15");

function hideAllImages5() {
  imageContainers5.querySelectorAll("img").forEach((image) => {
    image.style.display = "none";
  });
}

hideAllImages5();

const firstImage5 = document.getElementById("image13");
firstImage5.style.display = "block";

buttons5.forEach((button) => {
  button.addEventListener("click", () => {
    hideAllImages5();
    const imageId = button.getAttribute("data-image5");
    const targetImage = document.getElementById(imageId);
    targetImage.style.display = "block";
  });
});