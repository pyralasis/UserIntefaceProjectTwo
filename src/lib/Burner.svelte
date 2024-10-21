<script>
    import { fade } from "svelte/transition";
    import { burners } from "../stores.js";
    export let diameter;
    export let burnerNum;

    function getTemperature() {
        return $burners[burnerNum].temperature;
    }

    function getState() {
        if (getTemperature() == 0) return "off";
        return "on";
    }

    let simmerstatState = true;
    let simmerstat = () => {
        // Debug
        console.log(burnerNum, getTemperature(), getState());

        let timeOn = 10000 * (getTemperature() / 10);
        let timeOff = 10000 - timeOn;
        if (getTemperature() > 0) {
            if (simmerstatState) {
                setTimeout(simmerstat, timeOff);
                simmerstatState = false;
            } else {
                setTimeout(simmerstat, timeOn);
                simmerstatState = true;
            }
        } else {
            setTimeout(simmerstat, timeOff);
        }
    };

    $: {
        simmerstat();
    }
</script>

<div id="main-container">
    <svg width={diameter} height={diameter}>
        <defs>
            <radialGradient id="on">
                <stop offset="10%" stop-color="red" />
                <stop offset="95%" stop-color="gold" />
            </radialGradient>
            <radialGradient id="off">
                <stop offset="10%" stop-color="lightgray" />
                <stop offset="95%" stop-color="lightgray" />
            </radialGradient>
        </defs>

        <circle
            stroke="darkgray"
            stroke-width="10"
            cx={diameter / 2}
            cy={diameter / 2}
            r={diameter / 2 - 10}
            fill="url('#off')"
        />

        {#if simmerstatState}
            <circle
                transition:fade={{ delay: 250, duration: 300 }}
                stroke="darkgray"
                stroke-width="10"
                cx={diameter / 2}
                cy={diameter / 2}
                r={diameter / 2 - 10}
                fill="url('#{getState()}')"
            />
        {/if}
    </svg>
    <div>{getTemperature()} {getState()}</div>
</div>

<style>
    #main-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 250px;
        width: 300px;
        min-height: 250px;
        min-width: 300px;
        justify-content: center;
    }
</style>
