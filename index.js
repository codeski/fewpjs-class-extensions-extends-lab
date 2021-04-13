// Your code here
class Polygon {
    constructor(arrayOfIntegers){
        this.side1 = arrayOfIntegers[0]
        this.side2 = arrayOfIntegers[1]
        this.side3 = arrayOfIntegers[2]
        this.side4 = arrayOfIntegers[3]
        this.side5 = arrayOfIntegers[4]
    }

    get countSides(){
        let r = this.values()
        return r.length
    }

    get perimeter(){
        let r = this.values()
        let perimeter = r.reduce((total, currentValue) => total + currentValue)
        return perimeter
    }

    values(){ 
        let r = []
        let obj = this
        for(const v in obj){
            if (obj[v] !== undefined){
                r.push(obj[v])
            }
        }
        return r
    }
}

class Triangle extends Polygon {

    get isValid(){
        let values = this.values()

        values.sort((a, b) => a - b)
        if (values.length === 3 && (values[0] + values[1]) > values[2]){
            return true
        } else { return false }
    }
}

class Square extends Polygon{
    
    get isValid(){
        let values = this.values()
        if (values.length === 4 && values.every(v => v === values[0])){
            return true
        } else {return false}
    }

    get area(){
        let values = this.values()
        return values[0] * values[1]
    }
}
