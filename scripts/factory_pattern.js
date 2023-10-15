// Abstract console log function
function result(type, vehicle) {
    console.log(`New order: ${type} ${vehicle.brand} ${vehicle.model}`);
}

// Concrete Car class
class Car {
    constructor() {
        this.brand = "Porsche";
        this.model = "911 GT3 RS";
    }
}

// Concrete Bike class
class Bike {
    constructor() {
        this.brand = "Suzuki";
        this.model = "Hayabusa";
    }
}

// VehicleFactory class responsible for creating different types of vehicles
class VehicleFactory {
    createVehicle(type) {
        switch (type) {
            case "car":
                const car = new Car();
                result(type, car);
                return car;
            case "bike":
                const bike = new Bike();
                result(type, bike);
                return bike;
            default:
                throw new Error("Invalid vehicle type");
        }
    }
}

// Example usage of the Factory Pattern
const factory = new VehicleFactory();
const myCar = factory.createVehicle("car");
const myBicycle = factory.createVehicle("bike");
