<script>
  import BurnerContainer from "./lib/BurnerContainer.svelte";
  import Clock from "./lib/Clock.svelte";
</script>

<main>
  <BurnerContainer></BurnerContainer>
  <Clock></Clock>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
  }
</style>
