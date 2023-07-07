class Triangle{

    constructor(xA, yA, xB, yB, xC, yC){

        this.segmentAB = new Segment(xA,yA,xB,yB);
        this.segmentBC = new Segment(xB,yB,xC,yC);
        this.segmentCA = new Segment(xC,yC,xA,yA);
    }


    get perimeter(){
        return this.segmentAB.length + this.segmentBC.length + this.segmentCA.length;
    }


    get area(){  // formula di erone (6) A=√ [p (p-a) (p-b) (p-c)
        
        const semiPerimeter = this.perimeter / 2;
        return Math.sqrt(semiPerimeter * (semiPerimeter - this.segmentAB.length) * (semiPerimeter - this.segmentBC.length) * (semiPerimeter - this.segmentCA.length));
    }

    isRectangle(){  // se è un triangolo rettangolo
        
        if (Math.sqrt((this.segmentBC.length ** 2) + (this.segmentCA.length ** 2)) === this.segmentAB.length) {
            return true;
        } else {
            return false;
        }   
    }

}