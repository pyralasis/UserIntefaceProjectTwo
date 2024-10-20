<script>
    import {burners} from "../stores.js";

    function burner1and4(){
        $burners[0].temperature = 4;
        $burners[3].temperature = 7;
    }

    function burner2and3(){
        $burners[1].temperature = 5;
        $burners[2].temperature = 5;
    }

    function allOff(){
        for(let i = 0; i < $burners.length; i++){
            $burners[i].temperature = 0;
        }
    }
</script>

<h2>Testing</h2>
<button on:click={burner1and4}>
    Turn Top Left Burner to 4 and Bottom Right Burner to 7
</button>

<button on:click={burner2and3}>
    Turn Top Right Burner to 5 and Bottom Left Burner to 5
</button>

<button on:click={allOff}>
    Turn All Burners Off
</button>


<style>

</style>