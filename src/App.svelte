<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Toggle from "./components/Toggle.svelte";
  import Home from "./components/Home.svelte";
  import Laboratory from "./components/lab/Laboratory.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<Router basepath="/">
  <header class="header-blur">
    <nav>
      <Toggle />
    </nav>
  </header>
  <main>
    <Route path="/">
      <Home />
    </Route>
    <Route path="lab">
      <Laboratory />
    </Route>
  </main>
  <Footer />
</Router>

<style>
  main {
    text-align: center;
    /* padding: 1em; */
    max-width: 240px;
    margin: 0 auto;
    height: 100%;
  }

  .header-blur {
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 1;
  }

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
