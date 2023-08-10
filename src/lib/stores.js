import { writable } from "svelte/store";

export const calculadora = writable({
  a: '',
  b: '',
  c: '',
  x: '',
  travar: false
});

export const resultados = writable([]);

export const focarA = writable(true);