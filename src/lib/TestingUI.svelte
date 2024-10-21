<script>
    import { burners } from "../stores.js";
    import { testFan } from "../stores.js";

    function burner1and4() {
        $burners[0].temperature = 4;
        $burners[1].temperature = 0;
        $burners[2].temperature = 0;
        $burners[3].temperature = 7;
        $testFan[0].fanSpeed = 0;
        $testFan[0].fanText = "Off";
    }

    function burner2and3() {
        $burners[0].temperature = 0;
        $burners[1].temperature = 5;
        $burners[2].temperature = 5;
        $burners[3].temperature = 0;
        $testFan[0].fanSpeed = 0;
        $testFan[0].fanText = "Off";
    }

    function allOff() {
        for (let i = 0; i < $burners.length; i++) {
            $burners[i].temperature = 0;
        }
    }

    function burner3and4fanHigh() {
        $burners[0].temperature = 0;
        $burners[1].temperature = 0;
        $burners[2].temperature = 5;
        $burners[3].temperature = 5;
        $testFan[0].fanSpeed = 3;
        $testFan[0].fanText = "High";
    }

    function burner2and4fanMedium() {
        $burners[0].temperature = 0;
        $burners[1].temperature = 3;
        $burners[2].temperature = 0;
        $burners[3].temperature = 3;
        $testFan[0].fanSpeed = 2;
        $testFan[0].fanText = "Medium";
    }
</script>

<h2>Testing</h2>
<button on:click={burner1and4}>
    Turn Top Left Burner to 4 and Bottom Right Burner to 7
</button>

<button on:click={burner2and3}>
    Turn Top Right Burner to 5 and Bottom Left Burner to 5
</button>

<button on:click={allOff}> Turn All Burners Off </button>

<button on:click={burner3and4fanHigh}>
    Turn Bottom Burners to 5 and Set Fan to High
</button>

<button on:click={burner2and4fanMedium}>
    Turn Top Right and Bottom Right Burners to 3 and Set Fan to Medium
</button>

<style>
</style>
