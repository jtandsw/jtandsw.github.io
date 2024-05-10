
  let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/lishen.png") {
    myImage.setAttribute("src", "images/qiyu.jpg");
  } else {
    myImage.setAttribute("src", "images/lishen.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "遇见你值得我用一生去庆祝，" + myName;
    }
  }
  

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "遇见你值得我用一生去庆祝，" + storedName;
  }

  myButton.onclick = function () {
    setUserName();
  };
  