<script>
    import { burners } from "../stores.js";
    import Timer from "./Timer.svelte";
</script>

<div id="left-side-container">
    <h2 style="margin: 5% 0">Burners</h2>
    <div class="row-container">
        <div class="control-container">
            <label for="control-one">Temperature</label>
            <input
                style="display: inline; width: 100%"
                type="range"
                step="1"
                min="0"
                max="10"
                id="control-one"
                bind:value={$burners[0].temperature}
            />
            <Timer timerNum="0"></Timer>
            <p id="countdown0"></p>
        </div>

        <div class="control-container">
            <label for="control-two">Temperature</label>
            <input
                style="display: inline; width: 100%"
                type="range"
                step="1"
                min="0"
                max="10"
                id="control-two"
                bind:value={$burners[1].temperature}
            />
            <Timer timerNum="1"></Timer>
        </div>
    </div>
    <div class="row-container">
        <div class="control-container">
            <label for="control-three">Temperature</label>
            <input
                style="display: inline; width: 100%"
                type="range"
                step="1"
                min="0"
                max="10"
                id="control-three"
                bind:value={$burners[2].temperature}
            />
            <Timer timerNum="3"></Timer>
        </div>
        <div class="control-container">
            <label for="control-four">Temperature</label>
            <input
                style="display: inline; width: 100%"
                type="range"
                step="1"
                min="0"
                max="10"
                id="control-four"
                bind:value={$burners[3].temperature}
            />
            <Timer timerNum="4"></Timer>
        </div>
    </div>
</div>

<style>
    .row-container {
        display: flex;
        flex-direction: row;
    }
    .control-container {
        display: flex;
        flex-direction: column;
    }
</style>
