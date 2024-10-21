<script>
    export let timerNum;
    var timerID = "timer" + timerNum;
    var hoursID = "hours" + timerNum;
    var minutesID = "minutes" + timerNum;
    var secondsID = "seconds" + timerNum;
    var startID = "start" + timerNum;

    var countdownID = "countdown" + timerNum;

    var setHours = 0;
    var setMinutes = 0;
    var setSeconds = 0;
    // var timeToCountDownTo = new Date().getTime() + totalSetTimeInMilliseconds;

    var originalTime;

    function getCurrentTime() {
        originalTime = new Date().getTime();
    }

    function getTimer() {
        var totalSetTimeInMilliseconds =
            setHours * 3600000 + setMinutes * 60000 + setSeconds * 1000;
        var now = new Date().getTime();
        var timeLeft = originalTime + totalSetTimeInMilliseconds - now;

        var hours = Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        hours = hours < 0 ? 0 : hours;
        minutes = minutes < 0 ? 0 : minutes;
        seconds = seconds < 0 ? 0 : seconds;

        document.getElementById(countdownID).innerHTML =
            hours + ":" + minutes + ":" + seconds;
    }

    function startTimer() {
        if (setHours == 0 && setMinutes == 0 && setSeconds == 0)
            document
                .getElementById(countdownID)
                .setAttribute("visibility", "hidden");
        getCurrentTime();
        setInterval(getTimer, 1000);
    }
</script>

<div class="burnerTimer">
    <label for="timer">Timer: </label>
    <div class="timeInput">
        <label for={timerID}>Hours: </label>
        <input type="number" id={hoursID} bind:value={setHours} />
        <label for={timerID}>Minutes: </label>
        <input type="number" id={minutesID} bind:value={setMinutes} />
        <label for={timerID}>Seconds: </label>
        <input type="number" id={secondsID} bind:value={setSeconds} />
    </div>
    <button id={startID} on:click={startTimer}>Set</button>
    <p id={countdownID}></p>
</div>

<style>
    .burnerTimer {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 0px;
    }
    #seconds,
    #minutes,
    #hours {
        width: 4rem;
    }
    .timeInput {
        display: flex;
        flex-direction: column;
        align-items: left;
    }
</style>
