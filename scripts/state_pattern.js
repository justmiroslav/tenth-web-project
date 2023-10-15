// TrafficLight class responsible for showing and changing state
class TrafficLight {
    constructor () {
        this.color = "red";
    }

    changeState(color) {
        this.color = color;
    }

    showState() {
        console.log(`Current state: ${this.color}`);
    }
}

// Example usage of the State Pattern
const trafficLight = new TrafficLight();
trafficLight.showState();
trafficLight.changeState("green");
trafficLight.showState();
