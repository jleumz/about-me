<script>
  import { onMount } from "svelte";
  import { DARKMODE } from "../constants";

  let darkmodeActive = window.localStorage.getItem(DARKMODE)
    ? window.localStorage.getItem(DARKMODE) == "true"
    : false;

  onMount(() => {
    setDarkmode();
  });

  const setDarkmode = () => {
    window.localStorage.setItem(DARKMODE, darkmodeActive);
    darkmodeActive
      ? document.body.classList.add("dark-theme")
      : document.body.classList.remove("dark-theme");
  };
</script>

<div class="container">
  <label class="switch">
    <input
      type="checkbox"
      bind:checked="{darkmodeActive}"
      on:change="{setDarkmode}"
    />
    {#if darkmodeActive}
      <img src="light_mode_white_filled.svg" alt="light-mode-icon" />
    {:else}
      <img src="dark_mode_black_filled_rounded.svg" alt="dark-mode-icon" />
    {/if}
  </label>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    padding: 0.5em;
  }

  .container img {
    padding-right: 0.2em;
    cursor: pointer;
  }
  .switch {
    position: relative;
    display: inline-block;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
</style>
