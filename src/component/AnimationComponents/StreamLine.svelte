<script>
    export let lineHeight = 100;

</script>
<div class="line-container">
    <div class="line" style="--Height: {lineHeight}%;"></div>
</div>

<style>

    @keyframes drawLine {
        0% {
            height: 0%;
            opacity: 0;
        }
        100% {
            height: --var(--Height);
            opacity: 1;
        }
    }
    .line-container {
        width:auto !important;
        height: 100%;
        overflow: hidden;
    }
    .line {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        background-color: #fff;
        animation: drawLine 4s ease-in-out 1s;
        height: 100%;
    }
</style>