<script lang="ts">
  import Toggle from "./components/Toggle.svelte";

  export let name: string;
</script>

<header class="header-blur">
  <nav>
    <Toggle />
  </nav>
</header>
<main>
  <h1>Hello, {name}!</h1>
</main>
<footer></footer>

<style>
  main {
    text-align: center;
    /* padding: 1em; */
    max-width: 240px;
    margin: 0 auto;
  }

  .header-blur {
    backdrop-filter: saturate(1.5) blur(20px);
    position: sticky;
    top: 0;
    z-index: 1;
  }

  /* summary {
    cursor: pointer;
  } */

  /* change marker of toggle */
  /* details[open] > summary::marker {
        display: none;
        content: "- ";
    } */

  nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }


  /* img {
  width: 50px;
  height: 50px;
  object-fit: fill;
  padding-right: 1vw;
} */


  /* section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    padding: 100px 10vw;
  } */

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
