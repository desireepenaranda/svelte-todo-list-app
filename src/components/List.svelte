<script>
    import {onMount} from "svelte";
    import {items} from "../stores"

    import TodoApi from "../TodoApi";
    function handleNewItem(e){

    }

    function handleUpdate(e){
        
    }

    function handleDelete(e){
        
    }

    onMount(async() => {
        // fetch from API 
        $items = await TodoApi.getAll();
        console.log("in the onmount in list");
        console.log($items);
    });
</script>

<style>

</style>

<div class="list">
    {#each $items as item (item)}
    {JSON.stringify(item)}
    {:else}
    <p class="list-status"> No Items Exist</p>
    {/each}
</div>