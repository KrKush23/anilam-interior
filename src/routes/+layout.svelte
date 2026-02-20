<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Anilam | Premium Interior Design Studio</title>
	<link rel="icon" href="/logo.jpeg"/>
</svelte:head>

{@render children()}
