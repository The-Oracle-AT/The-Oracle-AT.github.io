<script>
    export let height = 100;
    export let width = 100;
    export let cardColor = "red"


</script>

<div class="card-2" style="background-color: {cardColor}; height: {height}%; width: {width}%; color:white; border-radius: 2em; padding: 0.2em;">
    <slot name="card2-details"/>
</div>

<style>
    .card-2 {
        box-shadow: 0 2px 0.5em rgba(84, 109, 248, 0.815);
        margin: 1em auto;
        text-align: left;

    }

</style>

