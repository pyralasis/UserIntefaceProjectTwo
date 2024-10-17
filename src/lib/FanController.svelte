<script>
    let fanSpeed = 0;
    let fanText = "Off";
    function cycleSpeed() {
        fanSpeed = (fanSpeed + 1) % 4;
        if (fanSpeed == 0){
            fanText = "Off";
        }
        else if (fanSpeed == 1){
            fanText = "Low";
        }
        else if (fanSpeed == 2){
            fanText = "Medium";
        }
        else if (fanSpeed == 3){
            fanText = "High";
        }
    }
</script>

<p>Fan Speed:</p>
<button on:click={cycleSpeed}>
    {fanText}
</button>