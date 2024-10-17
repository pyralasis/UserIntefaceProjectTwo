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
}

export const burners = writable([new burner("off", 100, 0),
new burner("off", 200, 0),
new burner("off", 200, 0),
new burner("off", 100, 0)]);
