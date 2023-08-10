<script>
  import { calculadora, resultados, focarA } from '$lib/stores';

  function calcularResultado() {
    if (!$calculadora.a || !$calculadora.b || !$calculadora.c) return;

    $calculadora.x = ($calculadora.b * $calculadora.c) / $calculadora.a;

    // estruturar resultado
    let resultado = `${$calculadora.a.toLocaleString('pt-BR')} está para ${$calculadora.b.toLocaleString('pt-BR')}, assim como ${$calculadora.c.toLocaleString('pt-BR')} está para ${$calculadora.x.toLocaleString('pt-BR')}`;
    
    // adicionar resultado ao store
    $resultados = [...$resultados, resultado];

    // travar calculadora até o reset
    $calculadora.travar = true;

    // enviar para o localStorage
    localStorage.setItem('resultados', JSON.stringify($resultados));

    // resetar foco
    $focarA = false;
  }

  let inputA;
  $: if (inputA && $focarA) {
    setTimeout(() => {
      inputA.focus();
    }, 150);
  }
</script>

<section>
  <div class="linha linha__1">
    <input bind:this={inputA} on:blur={calcularResultado} bind:value={$calculadora.a} name="a" type="number" placeholder="a" disabled={$calculadora.travar} />
    <input on:blur={calcularResultado} bind:value={$calculadora.b} name="b" type="number" placeholder="b" disabled={$calculadora.travar} />
  </div>
  <div class="linha linha__2">
    <input on:blur={calcularResultado} bind:value={$calculadora.c} name="c" type="number" placeholder="c" disabled={$calculadora.travar} />
    <input bind:value={$calculadora.x} name="x" type="number" placeholder="x" disabled class:concluido={$calculadora.travar} />
  </div>
</section>

<style>
  section {
    background-color: var(--bg-2);
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
    width: fit-content;
  }
  .linha {
    display: flex;
    gap: 40px;
    position: relative;
  }
  .linha::after {
    content: '';
    width: 40px;
    height: 8px;
    background-color: var(--bg);
    position: absolute;
    top: 26px;
    right: 120px;
  }
  input {
    width: 120px;
    height: 60px;
    padding: 16px;
    color: var(--principal);
    font-size: calc(18 / 16 * 1rem);
    background-color: var(--bg);
    border: none;
    text-align: end;
  }
  input::placeholder {
    color: var(--principal);
    text-transform: uppercase;
    opacity: .5;
  }
  input:focus-visible {
    outline: 1px solid var(--principal);
    outline-offset: -1px;
  }
  /* Remover setas type="number" */
  /* https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
  .concluido {
    border: 2px solid var(--destaque);
  }
</style>