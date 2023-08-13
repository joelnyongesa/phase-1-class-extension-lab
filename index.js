// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length;
    }

    get perimeter(){
        let sum=0
        this.sides.forEach(side =>{
            sum = sum+side
        })
        return sum
    }
}

class Triangle extends Polygon{
    get isValid(){
        if (this.sides.length !==3){
            return false;
        }
        const [side1,side2,side3] = this.sides;

        // Check the Triangle Inequality Theorem
        if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
            return true;
        } else {
            return false;
        }
    }
}


class Square extends Polygon{
    get isValid(){
        if(this.countSides !==4){
            return false;
        }
        const sideLength = this.sides[0]

        // Loop to check if the sides are all equal to the first side.
        for(let side of this.sides){
            if (sideLength !== side){
                return false;
            }
        }
        return true
    }

    get area(){
        if(this.isValid){
            return this.sides[0]*this.sides[0]
        }else{
            return `Invalid!`
        }
    }
}


const triangle = new Triangle(3,4,5)
console.log(triangle.isValid)