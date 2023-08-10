<script>
  import { calculadora } from '$lib/stores';
</script>

<section>
  <p>
    {#if $calculadora.a}
    <span>{$calculadora.a.toLocaleString('pt-BR')}</span>
    {/if}
 
    {#if $calculadora.b}
    <span>está para {$calculadora.b.toLocaleString('pt-BR')}.</span>
    {/if}
  </p>

  <p>
    {#if $calculadora.c}
    <span>Assim como {$calculadora.c.toLocaleString('pt-BR')}</span>
    {/if}
 
    {#if $calculadora.x}
    <span>está para {$calculadora.x.toLocaleString('pt-BR')}.</span>
    {/if}
  </p>
</section>

<style>
  section {
    margin-top: 8px;
    margin-left: 24px;
  }
</style>