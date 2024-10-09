import { writable } from 'svelte/store';

class burner {
    constructor(state, diameter) {
        this.state = state;
        this.diameter = diameter;
    }
    on(burnerNum) {
        this.state = "on"
    }
    off(burnerNum) {
        this.state = "off"
    }
}

export const burners = writable([new burner("off", 100), new burner("on", 200)]);
