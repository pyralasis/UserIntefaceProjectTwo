<script>
    import Burner from "./Burner.svelte";
    import FanController from "./FanController.svelte";
    import { burners } from "../stores.js";
</script>

<div id="main-container">
    <div id="top" class="container-row">
        <Burner
            diameter={$burners[0].diameter}
            burnerNum=0
        ></Burner>
        <Burner
            diameter={$burners[1].diameter}
            burnerNum=1
        ></Burner>
    </div>
    <div id="bottom" class="container-row">
        <Burner
            diameter={$burners[2].diameter}
            burnerNum=2
        ></Burner>
        <Burner
            diameter={$burners[3].diameter}
            burnerNum=3
        ></Burner>
    </div>
    <FanController></FanController>
</div>

<style>
    #main-container {
        display: flex;
        flex-direction: column;
        background-color: slategray;
        border-radius: 10px;
    }
    .container-row {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>
