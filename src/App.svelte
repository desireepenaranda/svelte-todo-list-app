<script>
	import Header from "./components/Header.svelte"
</script>

<style>
	.container{
		width: 500px;
		background: black
	}

	:global(.container *){
		font-family: sans-serif;
	}
</style>

<div class="container">
	<Header/>
	sample text!!!!
</div>