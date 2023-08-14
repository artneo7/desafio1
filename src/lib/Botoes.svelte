<script>
  import { ClipboardCopy, RotateCcw  } from 'lucide-svelte';
  import { calculadora, focarA } from '$lib/stores';
  import { copy } from 'svelte-copy';
  import { tooltip } from 'svooltip';
  import 'svooltip/styles.css';

  function resetar() {
    $calculadora.a = '';
    $calculadora.b = '';
    $calculadora.c = '';
    $calculadora.x = '';
  
    // destravar calculadora
    $calculadora.travar = false;

    // focar no primeiro campo
    $focarA = true;
  }  
</script>

<section class="btns">
  <button use:tooltip={{content: "Copiar"}} use:copy={`${$calculadora.x.toLocaleString('pt-BR')}`}><ClipboardCopy/></button>
  <button use:tooltip={{content: "Resetar", placement: "bottom"}} on:click={resetar} on:keypress={resetar}><RotateCcw/></button>
</section>

<style>
  .btns {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  button {
    width: 42px;
    height: 42px;
    background-color: var(--bg-2);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
</style>