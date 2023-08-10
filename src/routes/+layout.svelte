<script>
  import '$lib/global.css'
  import '@fontsource/inter';
  import { onMount } from 'svelte';
  import { resultados } from '$lib/stores';
	import Gradiente from '../lib/assets/Gradiente.svelte';
	import Footer from '../lib/Footer.svelte';
  
  onMount(() => {
    $resultados = JSON.parse(localStorage.getItem('resultados')) || [];
  })
  
</script>

<div class="app">
  <main class="main">
    <div class="container">
      <slot/>
    </div>
  </main>
  
  <Gradiente/>
  <Footer/>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  main {
    margin-top: 40px;
    margin-bottom: auto;
  }
</style>