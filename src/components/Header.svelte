<script>
import {items} from "../stores";
$: itemsCount = $items.length;
$: completedItemCount = $items.filter(item => item.completed).length;
</script>

<style>
.header{
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.5em;
    background: rbga(0,0,0,0.1);
}
</style>

<div class="header">
    <span>
        Fran's To Do List
    </span>

    <span>
        {completedItemCount}/{itemsCount}
    </span>
</div>