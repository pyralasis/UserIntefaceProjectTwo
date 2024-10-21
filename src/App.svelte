<script>
  import BurnerContainer from "./lib/BurnerContainer.svelte";
  import BurnerControls from "./lib/BurnerControls.svelte";
  import Clock from "./lib/Clock.svelte";
  import TestingUI from "./lib/TestingUI.svelte";

  function showInfo() {
    window.alert(
      "Use the sliders to control the corresponding burners and click the Fan icon to change its speed. 'Testing' section has examples.",
    );
  }
</script>

<main>
  <div id="info-section">
    <h2>Smart Stove</h2>
    <h3>Josh Lewis, Jake Husman, Justin Tran, Zach Cunningham</h3>
    <button on:click={showInfo}>Info</button>
  </div>

  <div id="main-container">
    <div id="left-container">
      <BurnerContainer></BurnerContainer>
    </div>
    <div id="middle-container">
      <Clock></Clock>
      <BurnerControls></BurnerControls>
    </div>
    <div id="right-container"><TestingUI></TestingUI></div>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
  }

  h2,
  h3 {
    margin: 0;
    padding: 0;
  }

  #left-container,
  #middle-container,
  #right-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
  }

  #main-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  :global(#app) {
    /* align-items: start; */
    display: flex;
    position: fixed;
    gap: 20px;
    justify-content: center;
    width: 100%;
    max-width: 100%;
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
    background-color: lightgray;
  }
</style>
