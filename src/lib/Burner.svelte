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
    {#if getTemperature() >= 0 && getTemperature() < 3}
        <hr
            class="burner-color-indicator"
            style="background-color: green; height: 2px;"
        />
    {:else if getTemperature() >= 3 && getTemperature() < 5}
        <hr
            class="burner-color-indicator"
            style="background-color: blue; height: 2px;"
        />
    {:else if getTemperature() >= 5 && getTemperature() < 7}
        <hr
            class="burner-color-indicator"
            style="background-color: yellow; height: 2px;"
        />
    {:else if getTemperature() >= 7 && getTemperature() < 9}
        <hr
            class="burner-color-indicator"
            style="background-color: yellow; height: 2px;"
        />
    {:else if getTemperature() >= 9 && getTemperature() < 11}
        <hr
            class="burner-color-indicator"
            style="background-color: yellow; height: 2px;"
        />
    {/if}
    <div>{getTemperature()} {getState()}</div>
</div>

<style>
    #main-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 300px;
        width: 300px;
        justify-content: center;
    }

    .burner-color-indicator {
        display: flex;
        height: 2px;
        width: 100%;
        margin: 1rem;
    }
</style>
