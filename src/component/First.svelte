<script>
    import StreamLine from "./AnimationComponents/StreamLine.svelte";
    import Typewriter from "./AnimationComponents/Typewriter.svelte";
    import Card from "./card.svelte";
</script>

<div class="container">
    <div class="card-elem">
        <Card title="Skills" primaryBackground="#3F0071" secondaryBackground = "#150050">
            <div class="card-content" slot="details">
                <div class="divider-text">
                    <div><StreamLine lineHeight={200} /></div>
                    <p style="color:white;">
                        <Typewriter setSpeed={4}
                        typedtext={'I specialize in both frontend and backend development, leveraging a diverse set of languages and technologies to bring ideas to life. My passion lies in crafting seamless user experiences and building robust, scalable applications. Explore the rest of the portfolio to see these skills in action!'}></Typewriter>
                </div>
            </div>
        </Card>
    </div>
    
    <div class="icons">
            <div class="second-card-content">
                
            </div>
                
        </div>
     
</div>
<style>

</style>