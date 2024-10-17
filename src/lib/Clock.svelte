<script>
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
    <h1>{h}:{m}:{s}</h1>
    <h2>{days[day]}</h2>
    <h2>{month}/{date}/{year}</h2>
</div>

<style>
    #main-container {
        background-color: slategray;
        border-radius: 10px;
    }
    h1,
    h2 {
        margin: 0;
        padding: 0;
    }
</style>
