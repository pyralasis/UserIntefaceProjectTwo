<script>
    import { burners } from "../stores.js";

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let date = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let day = today.getDay();
    let clock = () => {
        today = new Date();
        h = today.getHours();
        m = today.getMinutes();
        s = today.getSeconds();
        date = today.getDate();
        month = today.getMonth();
        year = today.getFullYear();
        day = today.getDay();

        setTimeout(clock, 1000);
    };
    $: {
        clock();
    }
</script>

<div id="main-container">
    <div id="left-side-container">
        <h2 style="margin: 5% 0">Burners</h2>
        <input
            style="display: inline; width: 40%"
            type="range"
            step="1"
            min="0"
            max="10"
            bind:value={$burners[0].temperature}
        />
        <input
            style="display: inline; width: 40%"
            type="range"
            step="1"
            min="0"
            max="10"
            bind:value={$burners[1].temperature}
        /> <br />
        <input
            style="display: inline; width: 40%"
            type="range"
            step="1"
            min="0"
            max="10"
            bind:value={$burners[2].temperature}
        />
        <input
            style="display: inline; width: 40%"
            type="range"
            step="1"
            min="0"
            max="10"
            bind:value={$burners[3].temperature}
        /> <br />
    </div>

    <div id="right-container">
        <h1>
            {h.toString().padStart(2, "0")}:{m.toString().padStart(2, "0")}:{s
                .toString()
                .padStart(2, "0")}
        </h1>
        <h2>{days[day]}</h2>
        <h2>{month}/{date}/{year}</h2>
    </div>
</div>

<style>
    #main-container {
        display: flex;
        flex-direction: row;
    }

    #left-side-container {
        border-radius: 10px;
        width: 10%;
        flex-grow: 1;
    }

    #right-container {
        background-color: slategray;
        border-radius: 10px;
        flex-grow: 2;
    }

    h1,
    h2 {
        margin: 0;
        padding: 0;
    }
</style>
