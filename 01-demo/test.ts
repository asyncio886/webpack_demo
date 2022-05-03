let str:string = "hello webpack";
function createCssInclude(str:string):void{
    let sub:HTMLElement = document.createElement("style");
    sub.innerHTML = str;
    document.body.appendChild(sub);
}
export default str;
export {createCssInclude};