<script>
    import Hexagons from "./Hexagons.svelte";

    const generateRandomHexagons = () => {
        const numHexagons = Math.round(Math.random() * 50);
        return [...Array(numHexagons)].map(() => ({
            x: window.innerWidth * Math.random(),
            y: window.innerHeight * Math.random(),
        }));
    };

    let hexagons = generateRandomHexagons();

    setInterval(() => {
        hexagons = generateRandomHexagons();
    }, 6000);
</script>

<div class="wrapper">
    {#each hexagons as { x, y }}
        <div style="position: absolute; left: {x}px; top: {y}px;">
            <Hexagons />
        </div>
    {/each}
</div>

<style>
    .wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>