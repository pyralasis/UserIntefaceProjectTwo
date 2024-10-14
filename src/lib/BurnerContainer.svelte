<script>
    import Burner from "./Burner.svelte";
    import { burners } from "../stores.js";
</script>

<div id="main-container">
    <div id="top" class="container-row">
        <Burner
            diameter={$burners[0].diameter}
            state={$burners[0].state}
            temperature={$burners[0].temperature}
        ></Burner>
        <Burner
            diameter={$burners[1].diameter}
            state={$burners[1].state}
            temperature={$burners[1].temperature}
        ></Burner>
    </div>
    <div id="bottom" class="container-row">
        <Burner
            diameter={$burners[2].diameter}
            state={$burners[2].state}
            temperature={$burners[2].temperature}
        ></Burner>
        <Burner
            diameter={$burners[3].diameter}
            state={$burners[3].state}
            temperature={$burners[3].temperature}
        ></Burner>
    </div>
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
