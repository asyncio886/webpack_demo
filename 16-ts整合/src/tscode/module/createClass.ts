class myArray<T>{
    private array:T[];
    private length:number;
    constructor(baseLength:number = 10){
        let len:number = (baseLength < 10? 10:baseLength);
        this.length = len;
        this.array = new Array(len);
    }
    public get(index: number):T{
        return this.array[index];
    }
    public size():number{
        return this.length;
    }
    public set(index:number,value:T):boolean{
        if(index >= this.length){
            return false;
        }
        this.array[index] = value;
        return true;
    }
    public remove(index: number):boolean{
        if(index >= this.length){
            return false;
        }
        for(let i:number = index;i < this.length;i++){
            this.array[index] = (index + 1 >= this.length? null : this.array[index + 1]);
        }
        return true;
    }
    public printAll():void{
        let dom:HTMLElement = document.createElement("div");
        this.array.forEach((value)=>{
            let sub:HTMLElement = document.createElement("span");
            let txt:string = JSON.stringify(value);
            sub.innerText = txt;
            dom.appendChild(sub);
        })
        document.body.appendChild(dom);
    }
}

export default myArray;