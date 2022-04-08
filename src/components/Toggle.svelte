<script>
  import { onMount } from "svelte";
  import { DARK_THEME } from "../constants";
  import { darkmodeActive } from "../store";

  onMount(() => {
    setDarkmode();
  });

  const setDarkmode = () => {
    window.localStorage.setItem(DARK_THEME, $darkmodeActive);
    $darkmodeActive
      ? document.body.classList.add(DARK_THEME)
      : document.body.classList.remove(DARK_THEME);
  };
</script>

<div class="container">
  <label class="switch">
    <input
      type="checkbox"
      bind:checked="{$darkmodeActive}"
      on:change="{setDarkmode}"
    />
    {#if $darkmodeActive}
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
