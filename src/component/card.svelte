<script>
    export let title = 'title';
    export let primaryBackground = '#1234ff';
    export let secondaryBackground = '#ff1234';

</script>

<div class="card" style="--primaryBackground: {primaryBackground}">
    
    <div class="card-header" style="--secondaryBackground: {secondaryBackground}">{title} </div>
    <div class="card-body">
        <slot name="details"/>
    </div>
</div>

<style>
    .card {
 
        border-radius: 1em;
        box-shadow: 0 2px 0.5em rgba(84, 109, 248, 0.815);
        padding: 1em;
        max-width: 630px;
        max-height: 260px;
        background-color: var(--primaryBackground);
        margin: 1em auto;
        text-align: left;
        transition: transform 0.3s ease-in-out;
    }

    .card:hover {
        transform: scale(1.05); /* Added hover effect */
    }

    .card-header {
        font-size: 1.5em;
        font-weight: bold;
        max-width: 100%;
        background-color: var(--secondaryBackground);
        padding: 0.5em;
        border-top-right-radius: 1em;
        border-bottom-left-radius: 1em;
    }
</style>