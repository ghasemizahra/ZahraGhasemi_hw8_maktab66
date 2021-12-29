class Circle{
    constructor(r)
    {
        this.radius=r
    
    }
    getArea(){
    //    return Math.PI*this.radius(Math.pow(2))(PI * r ^ 2)
       return Math.PI*Math.pow(this.radius, 2)


    }
    getPerimeter (){
        return 2 * Math.PI*this.radius


    } 

}
const AP=new Circle(4.44)
console.log(AP.getArea())
console.log(AP.getPerimeter())
