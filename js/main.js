imgs = document.getElementsByClassName("img-fluid img");
fixedBox = document.getElementById("fixedBox");
smallBox = document.getElementById("smallBox");
backbtn = document.getElementById("backbtn");
nextbtn = document.getElementById("nextbtn");
closebtn = document.getElementById("closebtn");
imgsarr = [];

for (let i = 0; i < imgs.length; i++) {
  imgsarr.push(imgs[i]);
}

var index;

for (i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    var imgsrc = e.target.getAttribute("src");

    index = imgsarr.indexOf(e.target);
    console.log(index);

    smallBox.style.backgroundImage = `url("${imgsrc}")`;
    fixedBox.style.display = "flex";
  });
}

closebtn.addEventListener("click", closewindow);
document.addEventListener("keyup", function (e) {
  if (e.key == "Escape") {
    closewindow();
  }else if (e.key == "ArrowRight") {
    nextimg();
  }else if (e.key == "ArrowLeft") {
    backimg();
  }
});
function closewindow() {
  fixedBox.style.display = "none";
}

nextbtn.addEventListener("click", nextimg)

function nextimg() {
  index++;
  if (index==imgs.length) {
    index=0
  }
  nextimgsrc=imgsarr[index].getAttribute("src")
  smallBox.style.backgroundImage = `url("${nextimgsrc}")`;

}

backbtn.addEventListener("click", backimg)

function backimg() {
  index--;

  if (index<0) {
    index=imgs.length-1
  }
  backimgsrc=imgsarr[index].getAttribute("src")
  smallBox.style.backgroundImage = `url("${backimgsrc}")`;
}

