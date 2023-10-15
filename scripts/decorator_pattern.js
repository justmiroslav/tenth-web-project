// Base Tea class
class Tea {
    calulatePrice() {
        return 10;
    }
}

// Decorator for adding milk to the tea
class MilkDecorator {
    constructor(tea) {
        this.tea = tea;
    }

    calulatePrice() {
        return this.tea.calulatePrice() + 2;
    }
}
  
// Decorator for adding honey to the tea
class HoneyDecorator {
    constructor(tea) {
        this.tea = tea;
    }

    calulatePrice() {
        return this.tea.calulatePrice() + 3;
    }
}

// Example usage of the Decorator Pattern
const tea = new Tea();
console.log(`My tea costs ${tea.calulatePrice()} bucks`);

const teaWithMilk = new MilkDecorator(tea);
console.log(`My tea with milk costs ${teaWithMilk.calulatePrice()} bucks`);

const teaWithHoney = new HoneyDecorator(tea);
console.log(`My tea with honey costs ${teaWithHoney.calulatePrice()} bucks`);

const teaWithMilkAndHoney = new HoneyDecorator(new MilkDecorator(tea));
console.log(`My tea with milk and honey costs ${teaWithMilkAndHoney.calulatePrice()} bucks`);
