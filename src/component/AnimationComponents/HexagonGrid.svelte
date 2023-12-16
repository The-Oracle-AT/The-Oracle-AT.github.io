<script>
    import Hexagons from "./Hexagons.svelte";


    


</script>

<div class="wrapper">
    <div class="hexa"><Hexagons /></div>
    <div class="hexa"><Hexagons /></div>
    <div class="hexa"><Hexagons /></div>



</div>

<style>
    .wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .wrapper > * {
        width: 30svw;
        height: 30svw;
    }
    .hexa:nth-child(1){
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
</style>