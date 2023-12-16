<script>
    import Typewriter from "./AnimationComponents/Typewriter.svelte";

    const intro = ["Hi, I'm Lapane. \n Welcome to my portfolio!"];
 
</script>

<!-- svelte-ignore a11y-img-redundant-alt -->
<div class="header-image">
    <img src="images/headerImg.png" alt="header image of personal portfolio" class="headerImg" />
    <div class="vignette"></div>
    <div class="header-text">
        {#each intro as text}
            <h1 style="font-size: 2em;"> <Typewriter typedtext={text} /> </h1>
        {/each}
        <p>Look around and explore the site...</p>
    </div>
    
</div>


<style>
    .header-image {
        position: relative;
        width: 100%;
        height: 100svh;
        overflow: clip;
    }
    .headerImg {
        max-width: 50%;
        height: 100%;
        transform: translateX(50%);
        
        object-fit: cover;
        object-position: right;
        filter: brightness(0.8);
    }
    .header-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 8em;
        font-weight: bold;
        color: white;
        text-align: left;
        width: 100%;
        padding: 0 1em;
    }
    .header-text {
		font-size: 1.5em;
	}
	.header-text p {
		font-size: 0.7em;
		font-weight: normal;
        animation: fadeIn 5s ease-in 0s;
	}

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(200%);
        }
        50% {
            opacity: 0;
            transform: translateY(200%);
        }
        70% {
            opacity: 0;
            transform: translateY(200%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @media only screen and (max-width: 600px){
        .header-text {
            font-size: 0.7em;
        }
    }
</style>