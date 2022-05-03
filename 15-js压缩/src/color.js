import dom from './draw';
let colorList = ["red","green"];
let index = 0;
setInterval(() => {
    dom.style.backgroundColor = colorList[(index = (index + 1)%2)]
}, 1000);