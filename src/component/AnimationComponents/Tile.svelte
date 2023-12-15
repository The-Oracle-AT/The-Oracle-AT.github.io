<script>
        export let size = 200;
    $: outerTileSize = `${size*0.82}px`;
    $: secondTileSize = `${size*0.7}px`;
    $: thirdTileSize = `${size*0.64}px`;
    $: fourthTileSize = `${size*0.52}px`;
    $: innerTileSize = `${size*0.42}px`;

</script>

<div class="tile-wrapper">
    <div class="tile">
        <svg style:width={outerTileSize} style:height={outerTileSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6H6V18H18V6ZM4.5 4.5V19.5H19.5V4.5H4.5Z" fill="#000000"/>
        </svg>  
        <svg style:width={secondTileSize} style:height={secondTileSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6H6V18H18V6ZM4.5 4.5V19.5H19.5V4.5H4.5Z" fill="#000000"/>
        </svg>
        <svg style:width={thirdTileSize} style:height={thirdTileSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6H6V18H18V6ZM4.5 4.5V19.5H19.5V4.5H4.5Z" fill="#000000"/>
        </svg>
        <svg style:width={fourthTileSize} style:height={fourthTileSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6H6V18H18V6ZM4.5 4.5V19.5H19.5V4.5H4.5Z" fill="#000000"/>
        </svg>
        <svg fill="#000000" style:width={innerTileSize} style:height={innerTileSize} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M 6 6 L 6 26 L 26 26 L 26 6 L 6 6 z"/>
        </svg>
    </div>
</div>

<style>
    :root {
        --delay: 0.767s;
    }
    @keyframes scaleUp{
        0% {
            transform: scale(1);
        }
        30% {
            transform: scale(1.1);
        }
        50% {
            transform: scale(1.1);
        }
        80% {
            transform: scale(1);
        }
        100% {
            transform: scale(1);
        }
}
    @keyframes lightUp {
        0% {
        }
        30% {
            filter: 
            drop-shadow(0 0 60px 30px #fff)  /* inner white */
            drop-shadow(0 0 100px 60px #f0f) /* middle magenta */
            drop-shadow(0 0 140px 90px #0ff); /* outer cyan */
        }
        60% {

            filter: 
            drop-shadow(0 0 60px 30px #fff)  /* inner white */
            drop-shadow(0 0 100px 60px #f0f)/* middle magenta */
            drop-shadow(0 0 140px 90px #0ff); /* outer cyan */
        }
        70% {
            filter: 
            drop-shadow(0 0 0.5em #a50125) drop-shadow(0 0 0.6em #123fff) ;
        }
        100% {
        }
        /*
        0% {
            
            filter: 
                drop-shadow(0 0 60px 30px #fff) 
                drop-shadow(0 0 100px 60px #f0f) 
                drop-shadow(0 0 140px 90px #0ff);
        }
        30% {
            filter: 
                drop-shadow(0 0 60px 30px #fff) 
                drop-shadow(0 0 100px 60px #f0f) 
                drop-shadow(0 0 140px 90px #0ff);
        }
        100% {
            filter: drop-shadow(0 0 0px 0px #0000);
        } */
    }
    .tile-wrapper {
        height: 100svh;
        width: 100svw;
        background-color: aliceblue;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tile {
        background-color: red;
        height: var(--height);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        
    }
    svg {
        position: absolute;
        
    }
    path {
        border: 3px solid red;
    }
    svg:nth-child(1) path {
        transform-origin: center;
        animation: scaleUp 2s ease-in-out infinite, lightUp 2s ease-in-out infinite;
        animation-delay: calc(var(--delay) * 0.8);
    }
    svg:nth-child(2) path {
        transform-origin: center;
        animation: scaleUp 2s ease-in-out infinite;
        animation-delay: calc(var(--delay) * 0.6);
    }
    svg:nth-child(3) path {
        transform-origin: center;
        animation: scaleUp 2s ease-in-out infinite;
        animation-delay: calc(var(--delay) * 0.4);

    }
    svg:nth-child(4) path{
        transform-origin: center;
        animation: scaleUp 2s ease-in-out infinite;
        animation-delay: calc(var(--delay) * 0.2);
    }
    svg:nth-child(5) path {
        transform-origin: center;
        animation: scaleUp 2s ease-in-out infinite;
    }


</style>