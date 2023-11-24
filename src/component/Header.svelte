<script>
</script>

<!-- svelte-ignore a11y-img-redundant-alt -->
<div class="header-image">
    <img src="images/headerImg.png" alt="header image of personal portfolio" class="headerImg" />
    <div class="vignette"></div>
    <div class="header-text"><slot name="other-header-content"/></div>
    
</div>


<style>
    .header-image {
        position: relative;
        width: 100%;
        overflow: hidden;
        background-color: black;

        
    }
    .headerImg {
        max-width: 80vw;
        height: 100%;
        object-fit: cover;
        object-position: center;
        filter: brightness(0.8);
        border-radius: 50%;
    }
    .header-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2em;
        font-weight: bold;
        color: white;
        text-align: center;
        width: 100%;
        padding: 0 1em;
    }
    .vignette {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, transparent, rgb(5, 5, 5) 70%);
        opacity: 0.5;
        }
</style>