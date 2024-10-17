<script>
    import { fade } from "svelte/transition";
    export let state;
    export let diameter;

    export let temperature; // 0-10; percent of time over 10 seconds the burner is on; eg 5 = 50%
    let simmerstatState = true;
    let simmerstat = () => {
        let timeOn = 10000 * (temperature / 10);
        let timeOff = 10000 - timeOn;
        if (temperature > 0) {
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

    let checkState = () => {
        if (temperature > 0) {
            state = "on";
        } else {
            state = "off";
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
                fill="url('#{state}')"
            />
        {/if}
    </svg>

    <label for="temperature-input">Temperature</label>
    <input
        id="temperature-input"
        type="range"
        step="1"
        min="0"
        max="10"
        bind:value={temperature}
        on:change={checkState}
    />
    <div>{temperature}</div>
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
</style>
