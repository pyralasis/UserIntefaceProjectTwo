import { writable } from 'svelte/store';

class burner {
    constructor(state, diameter, temperature) {
        this.state = state;
        this.diameter = diameter;
        this.temperature = temperature;
    }
    on(burnerNum) {
        this.state = "on"
    }
    off(burnerNum) {
        this.state = "off"
    }
    checkState() {
        if (this.temperature > 0) {
            this.state = "on";
        } else {
            this.state = "off";
        }
        console.log("New state: ", this.state, this.temperature)
    };
}

class fan {
    constructor(testSpeed, testText) {
        this.fanSpeed = testSpeed;
        this.fanText = testText;
    }
}

export const burners = writable([
    new burner("off", 100, 0),
    new burner("off", 200, 0),
    new burner("off", 200, 0),
    new burner("off", 100, 0)]
);

export const testFan = writable([
    new fan(0, "Off"),
]);
