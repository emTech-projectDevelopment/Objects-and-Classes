// CREATE HOUSE CLASS
class House {
    // CONSTRUCTOR TO BIND VALUES
    constructor(color, bedr, sqm, price) {
        this.color = color,
        this.bedr = bedr,
        this.sqm = sqm,
        this.price = price
    }

    // STATIC CLASS METHOD 
    static addHouse(color,bedr, sqm, price){
        color : color = prompt("Enter a color");
        bedr : bedr = prompt("How many rooms?");
        sqm : sqm = prompt("How many square meters?");
        price : price = prompt("How much did it cost?");

        return new House(color, bedr, sqm, price)
    };

    // GET METHOD
    get getHouseDetails(){
        return `Color = ${this.color}\nBedrooms = ${this.bedr}\nSQM = ${this.sqm}\nPrice = ${this.price}`
    }

}

// CREATE NEW HOUSE CLASS ASSIGNED IN A VARIABLE
// HERE WE HARD CODE THE ARGUMENTS
let myNewHouse = new House("red",4,500,650000);

console.log(myNewHouse)

// CALL THE CLASS GET METHOD
console.log(myNewHouse.getHouseDetails)
