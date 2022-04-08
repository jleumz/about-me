import { writable } from "svelte/store";
import { DARK_THEME } from "./constants";

export const darkmodeActive = window.localStorage.getItem(DARK_THEME)
  ? writable(window.localStorage.getItem(DARK_THEME) == "true")
  : writable(false);
