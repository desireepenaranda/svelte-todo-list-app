<script>
    import {onMount} from "svelte";
    import {items} from "../stores";
    import {v4 as uuidv4} from "uuid";

    import TodoApi from "../TodoApi";
    import Item from "./Item.svelte";
    import NewItem from "./NewItem.svelte";
    function handleNewItem(e){
        $items = [
            {
                id: uuidv4(),
                text: e.detail,
                completed: false
            },
            ...$items
        ]        
        TodoApi.save($items);

    }

    function handleUpdate(e){
        const index = $items.findIndex(item => item.id === e.detail.id);
        $items[index] = e.detail;
        TodoApi.save($items);
    }

    function handleDelete(e){
        // in this example the object passed to thorugh the event handler is the ID
        $items = $items.filter(item => item.id != e.detail);
        TodoApi.save($items);
    }

    let itemsSorted = [];
    $: {
        itemsSorted = [...$items];
        itemsSorted.sort((a,b) => {
            if(a.completed && b.completed){
                return 0;
            }else if(a.completed){
                return 1;
            }else{
                return -1;
            }
        })
    }

    onMount(async() => {
        // fetch from API 
        $items = await TodoApi.getAll();
        console.log("in the onmount in list");
        console.log($items);
    });
</script>

<style>
.list{
    padding: 15px;
}

.list-status{
    margin: 0;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.1;
}
</style>

<div class="list">
    <NewItem on:newitem={handleNewItem}/>
    {#each itemsSorted as item (item)}
        <Item {...item} on:update={handleUpdate} on:delete={handleDelete}/>
    {:else}
        <p class="list-status"> No Items Exist</p>
    {/each}

</div>