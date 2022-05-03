let dom = document.createElement("h1");
dom.innerHTML = "hello webpack";
document.body.appendChild(dom);

let img = document.createElement("img");
// webpack中可以这样导入图片
img.setAttribute("src",require("../image/xiangbing.jpg"));
document.body.appendChild(img);