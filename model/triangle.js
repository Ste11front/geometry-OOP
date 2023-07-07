class Triangle{

    constructor(xA, yA, xB, yB, xC, yC){

        this.segmentAB = new Segment(xA,yA,xB,yB);
        this.segmentBC = new Segment(xB,yB,xC,yC);
        this.segmentCA = new Segment(xC,yC,xA,yA);
    }


    get perimeter(){
        return this.segmentAB.length + this.segmentBC.length + this.segmentCA.length;
    }


    get area(){  // formula di erone A=√ [p (p-a) (p-b) (p-c)
        const halfPerimeter = this.perimeter / 2;
        const hPminusAB = halfPerimeter - this.segmentAB.length;
        const hPminusBC = halfPerimeter - this.segmentBC.length;
        const hPminusCA = halfPerimeter - this.segmentCA.length;
        return Math.sqrt(halfPerimeter * hPminusAB * hPminusBC * hPminusCA);
      //return Math.sqrt(halfPerimeter * (halfPerimeter - this.segmentAB.length) * (halfPerimeter - this.segmentBC.length) * (halfPerimeter - this.segmentCA.length));
    }

    isRectangle(){  // se è un triangolo rettangolo
        
        if (Math.sqrt((this.segmentBC.length ** 2) + (this.segmentCA.length ** 2)) === this.segmentAB.length) {
            return true;
        } if (Math.sqrt((this.segmentAB.length ** 2) + (this.segmentCA.length ** 2)) === this.segmentBC.length) {
            return true;
        } if (Math.sqrt((this.segmentAB.length ** 2) + (this.segmentBC.length ** 2)) === this.segmentCA.length) {
            return true;
        } else {
            return false;
        }
    }
}