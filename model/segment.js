class Segment{
    
    constructor(xA, yA, xB, yB){
        this.pointA = new Point(xA, yA);
        this.pointB = new Point(xB, yB);
    }

    get length(){
        const deltaX = this.pointA.x -this.pointB.x;
        const deltay = this.pointA.y -this.pointB.y;

        const length = Math.sqrt(deltaX ** 2 + deltay ** 2);

        return length;
    }
}