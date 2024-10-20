<script>
  import BurnerContainer from "./lib/BurnerContainer.svelte";
  import Clock from "./lib/Clock.svelte";
  import TestingUI from "./lib/TestingUI.svelte";
</script>

<main>
  <BurnerContainer></BurnerContainer>
  <Clock></Clock>
  <br>
  <TestingUI></TestingUI>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
  }
</style>
