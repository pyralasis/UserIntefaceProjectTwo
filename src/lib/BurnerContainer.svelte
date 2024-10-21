<script>
    import Burner from "./Burner.svelte";
    import FanController from "./FanController.svelte";
    import { burners, testFan } from "../stores.js";
    import Timer from "./Timer.svelte";
</script>

<div id="main-container">
    <div id="top" class="container-row">
        <div class="burner">
            <Burner diameter={$burners[0].diameter} burnerNum="0"></Burner>
            <Timer timerNum="0"></Timer>
            <p id="countdown0"></p>
        </div>
        <div class="burner">
            <Burner diameter={$burners[1].diameter} burnerNum="1"></Burner>
            <Timer timerNum="1"></Timer>
        </div>
    </div>
    <div id="bottom" class="container-row">
        <div class="burner">
            <Burner diameter={$burners[2].diameter} burnerNum="2"></Burner>
            <Timer timerNum="2"></Timer>
        </div>
        <div class="burner">
            <Burner diameter={$burners[3].diameter} burnerNum="3"></Burner>
            <Timer timerNum="3"></Timer>
        </div>
    </div>
    <FanController fanSpeed={$testFan[0].fanSpeed} fanText={$testFan[0].fanText}
    ></FanController>
</div>

<style>
    #main-container {
        display: flex;
        flex-direction: column;
        /* height: 200px; */
        background-color: slategray;
        border-radius: 10px;
    }
    .container-row {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .burner {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 400px;
    }
</style>
