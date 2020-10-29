class Polygon{
    constructor(arrayOfSides){
        for(let x=0; x<arrayOfSides.length; x++){
            this[`side${x+1}`] = arrayOfSides[x];
        }
    }
    get countSides(){
        return Object.keys(this).length;
    }
    get perimeter(){
        let p = 0;
        for(let x=1; x<=Object.keys(this).length; x++){
            debugger;
            p+= this[`side${x}`];
        }
        return p;
    }
}

class Triangle extends Polygon{
    get isValid(){
        if(this.side1 + this.side2 > this.side3
            && this.side2 + this.side3 > this.side1
            && this.side3 + this.side1 > this.side2
            && this.countSides === 3){return true;}
        else {return false;}
    }
}

class Square extends Polygon{
    get isValid(){
        if (this.countSides===4 &&
        (this.side1===this.side2 && this.side2===this.side3 && this.side3===this.side4)){
            return true;
        }else {return false; }
    }

    get area(){
        return this.side1**2;
    }
}