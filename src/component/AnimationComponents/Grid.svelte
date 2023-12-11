<script>

</script>

<div class="wrapper">
    <div class="grid">
        <div class="grid-item">Img</div>
        <div class="grid-item">Name and Descr</div>
        <div class="grid-item">Github</div>
        <div class="grid-item">How To</div>
        <div class="grid-item">Other sources</div>
        <div class="grid-item">Tech Stack</div>
    </div>
</div>

<style>
    :root {
        --primaryBackground: rgba(14, 15, 19, 0.1);
        --secondaryBackground: rgba(5, 12, 48, 0.2);
    }
    .wrapper {
        width: 100dvw;
        height: 100dvh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .grid {
        display: grid;
        grid-template-columns: 200px auto 200px;
        grid-template-rows: minmax(100px, auto) minmax(100px, auto) minmax(100px, auto);
        grid-template-areas: 
        "a a b"
        "a a c"
        "f e d"
        ;
        gap: 0.1em;
        transform: perspective(1000px) rotateX(15deg) rotateY(0deg) rotateZ(0deg);
        position: relative;
    }
    .grid-item {
        background-color: var(--primaryBackground);
        backdrop-filter: blur(5px);
        border-color: blue;
        border-width: 2px;
        border-radius: 5px;
        box-shadow: 2px 2px 1px inset white, 
        2px 2px 0.2em rgb(41, 72, 252),
        2px 2px 0.2em rgb(67, 94, 250),
        2px 2px 0.2em rgb(116, 136, 250);
        padding: 0.5em;
        text-align: left;
        transition: transform 0.3s ease-in-out;
        position: relative;
    }
    
    .grid-item:nth-child(1) {
        grid-area: a;
    }
    .grid-item:nth-child(2) {
        grid-area: b;
        transform: translate(-10px, -10px);
    }
    .grid-item:nth-child(3) {
        grid-area: c;
        transform: translate(-15px, 10px);
    }
    .grid-item:nth-child(4) {
        grid-area: d;
        transform: translate(10px, -10px);
    }
    .grid-item:nth-child(5) {
        grid-area: e;
    }
    .grid-item:nth-child(6) {
        grid-area: f;
        transform: translate(-10px, -10px);
    }
    .grid-item:hover {
        transform: scale(1.5) rotateX(5deg) rotateY(0deg) rotateZ(0deg);
        z-index: 1;

    }
</style>