<script>
    import { testFan } from "../stores.js";

    export let fanSpeed = $testFan[0].fanSpeed;
    export let fanText = $testFan[0].fanText;

    function cycleSpeed() {
        fanSpeed = (fanSpeed + 1) % 4;
        if (fanSpeed == 0) {
            fanText = "Off";
        } else if (fanSpeed == 1) {
            fanText = "Low";
        } else if (fanSpeed == 2) {
            fanText = "Medium";
        } else if (fanSpeed == 3) {
            fanText = "High";
        }
    }
</script>

<button on:click={cycleSpeed}>
    <img
        src="src/assets/fan-solid.svg"
        alt="Fan Speed"
        width="17"
        height="17"
        id="fan-image"
    />{fanText}
</button>

<style>
    #fan-image {
        /* Jake: Just using this to make the fan SVG a nice gray, not black. */
        filter: invert(48%) brightness(118%) contrast(119%);
        padding-right: 8px;
    }
</style>
