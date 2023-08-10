<script>
	import Botoes from "../lib/Botoes.svelte";
	import Calculadora from "../lib/Calculadora.svelte";
	import Historico from "../lib/Historico.svelte";
	import Resultado from "../lib/Resultado.svelte";
</script>

<svelte:head>
	<title>Regra de 3 simples</title>
	<meta name="description" content="App de regra de 3 simples deselvolvido em Svelte" />
</svelte:head>

<h1>Regra de 3 simples</h1>

<div>
	<Calculadora/>
	<Botoes/>
	<Resultado/>
</div>

<Historico/>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	h1 {
		font-size: calc(24 / 16 * 1rem);
	}
</style>