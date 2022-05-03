import myArray from "./module/createClass";
let str: string = "sdssada";
alert(str);
let a:myArray<number> = new myArray<number>(100);
for(let i = 0;i < 100;i++){
    a.set(i,i);
}
a.printAll();

