<script>
  import { resultados } from '$lib/stores';
	import { Trash } from 'lucide-svelte';

  function deletarResultados() {
    $resultados = [];

    // remover resultados do localStorage
    localStorage.removeItem('resultados');
  }
</script>

{#if $resultados.length}
<section>
  <button on:click={deletarResultados} on:keypress={deletarResultados}>
    <div class="icone">
      <Trash size="16" />
    </div>
    <span>Deletar resultados</span>
  </button>
  <ul class="resultados">
    {#each $resultados.reverse() as item}
    <li>{item}</li>
    {/each}
  </ul>
</section>
{/if}

<style>
  section {
    display: grid;
    max-width: 940px;
  }
  .resultados {
    border: 1px solid var(--bg-2);
    max-height: 402px;
    overflow-y: auto;
  }
  li {
    font-size: calc(14 / 16 * 1rem);
    height: 40px;
    background-color: var(--bg);
    display: flex;
    align-items: center;
    padding: 16px;
    white-space: nowrap;
  }
  li:first-child {
    margin-top: -1px;
  }
  li + li {
    border-top: 1px solid var(--bg-2);
  }
  button {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 8px;
    justify-self: end;
  }
  .icone {
    height: 24px;
    width: 24px;
    background-color: var(--bg-2);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: 700px) {
    section {
      margin-top: 32px;
    }
    button {
      order: 2;
      margin-top: 16px;
    }
  }
</style>