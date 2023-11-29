<script>
    import { slide } from 'svelte/transition';


    let images = [
        { url: "images/5.png", description: 'Image 1' },
        { url: "images/pic1.png", description: 'Image 2'},
        { url: "images/pic2.png", description: 'Image 3'}
    ];
    let currentSlide = 0;


    /**Next image handler*/
    const nextImageHandler = () => {
        currentSlide = (currentSlide + 1) % images.length;
    }
    /*Previous Image Handler*/
    const prevImageHandler = () => {
        if (currentSlide != 0) {
            currentSlide = (currentSlide - 1 ) % images.length;
        } else {
            currentSlide = images.length - 1;
        }
    }
    setInterval(() => {
        nextImageHandler();
    }, 5000);
    

</script>
{#if images.length == 0}
    <div>Upload Images</div>
{:else}
    <div class="carousel">
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="inner-carousel">
            
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
        
            
            <div class="previous-slide" on:click={prevImageHandler}>
                <img
                    transition:slide={{axis:'x'}}
                    src={images[(currentSlide - 1 + images.length) % images.length].url}
                    alt={images[(currentSlide - 1 + images.length) % images.length].description}
                    width={200}
                    height={150}/>
            </div>
            <div class="current-slide">
                <img
                    transition:slide={{axis:'x'}}
                    src={images[currentSlide].url}
                    alt={images[currentSlide].description}
                    width={400}
                    height={300}/>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="next-slide" on:click={nextImageHandler}>
                <img
                    transition:slide={{axis:'x'}}
                    src={images[(currentSlide + 1) % images.length].url}
                    alt={images[(currentSlide + 1) % images.length].description}
                    width={200}
                    height={150}/>
            </div>
        </div>
    </div>
{/if}
<style>
    .carousel {
        display: flex;
        
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        background: #000;
    }
    .inner-carousel {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background: #000;
    }


    .current-slide{
        position:relative;
        height: 300px;
        max-width: 400px;
        border: #fff 1px solid;
        box-shadow:
        inset 0 0 50px #fff,      /* inner white */
        inset 20px 0 80px #f0f,   /* inner left magenta short */
        inset -20px 0 80px #0ff,  /* inner right cyan short */
        inset 20px 0 300px #f0f,  /* inner left magenta broad */
        inset -20px 0 300px #0ff, /* inner right cyan broad */
        0 0 50px #fff,            /* outer white */
        -10px 0 80px #f0f,        /* outer left magenta */
        10px 0 80px #0ff;         /* outer right cyan */
    }
    .current-slide {
        object-fit: cover;
        z-index: 1;
        border-radius: 2em;
        transition: all 0.5s ease-in-out;
    }
    img {
        border-radius: 1em;
    }
    .previous-slide, .next-slide{
        z-index: 0;
        object-fit: cover;
        opacity: 0.8;
        border-radius: 1em;

    }
    .previous-slide {
        position: relative;
        left: 5%;
        transform: perspective(300px) rotateY(30deg);
        border: #fff 1px solid;
        box-shadow: 
        inset 0 0 50px #fff,      /* inner white */
        inset 20px 0 80px #f0f,   /* inner left magenta short */
        inset -20px 0 80px #0ff,  /* inner right cyan short */
        inset 20px 0 300px #f0f,  /* inner left magenta broad */
        inset -20px 0 300px #0ff, /* inner right cyan broad */
        0 0 50px #fff,            /* outer white */
        -10px 0 80px #f0f,        /* outer left magenta */
        10px 0 80px #0ff;         /* outer right cyan */
    }

    .next-slide {
        position: relative;
        right: 5%;
        transform: perspective(300px) rotateY(-30deg);
        border: #fff 1px solid;
        box-shadow: 
        inset 0 0 50px #fff,      /* inner white */
        inset 20px 0 80px #f0f,   /* inner left magenta short */
        inset -20px 0 80px #0ff,  /* inner right cyan short */
        inset 20px 0 300px #f0f,  /* inner left magenta broad */
        inset -20px 0 300px #0ff, /* inner right cyan broad */
        0 0 50px #fff,            /* outer white */
        -10px 0 80px #f0f,        /* outer left magenta */
        10px 0 80px #0ff;         /* outer right cyan */
    }
    @media screen and (max-width: 800px) {

        .carousel {
            max-width: 480px;
            display: flex;
            justify-content: center;
        }
        .inner-carousel{
            max-width: 100%;
        }
        .current-slide{
            transform: scale(0.9);
        }
        .previous-slide, .next-slide{
            transform: scale(0);
            display: none;
        }
    }


</style>