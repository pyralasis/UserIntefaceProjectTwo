<script>
  import BurnerContainer from "./lib/BurnerContainer.svelte";
  import Clock from "./lib/Clock.svelte";
  import TestingUI from "./lib/TestingUI.svelte";
</script>

<main>
  <div id="left-container">
    <BurnerContainer></BurnerContainer>
  </div>
  <br />
  <div id="right-container">
    <Clock></Clock>

    <TestingUI></TestingUI>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
    background-color: lightgray;
    justify-content: space-around;
  }
  #left-container,
  #right-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  :global(#app) {
    /* align-items: start; */
    display: flex;
    position: fixed;
    gap: 20px;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    flex-direction: row;
    padding: 20px;
    margin: 0;
    text-align: center;
  }

  :global(body) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    min-width: 100%;
    min-height: 100vh;
    max-width: 100%;
  }
</style>
