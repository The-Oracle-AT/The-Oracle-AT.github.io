<script>
    import Skills from "./SecondaryComponents/Skills.svelte";
    import Card from "./card.svelte";
</script>

<div class="container">
    <div class="card-elem">
        <Card title="Skills" primaryBackground="#3F0071" secondaryBackground = "#150050">
            <div class="card-content" slot="details">
                <Skills/>
            </div>
        </Card>
    </div>
    
    <div class="icons">
            <div class="second-card-content">
                <div class="stuff">
                    <p>Consectetur culpa elit Lorem ut magna 
                        proident sint. Consequat nulla ea laborum 
                        dolore Lorem anim labore commodo officia
                         officia. Enim cupidatat occaecat dolore 
                         reprehenderit non veniam elit esse do nisi
                          ad vel</p>
                </div>
            </div>
                
        </div>
     
</div>
<style>
    .container {
        display: grid;
        position: relative;
        z-index:0;

    }
    .card-elem, .icons {
        grid-column: 1;
        grid-row: 1;
    }
    .card-elem {
        z-index: 1;
    }
    .icons {
        background-color: black;
        max-width: 40%;
        max-height: 150px;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        top: 50%;
        left: 50%;
        transform: translate(-20%, 95%);
        border-radius: 1em;
        z-index: 2;
        box-shadow: 0 2px 0.5em rgba(84, 109, 248, 0.815);
    }
    .second-card-content {
        width: 100%;
        padding-left: 0.2em;
        color: white;
        text-align: left;
        max-height:100%;
        overflow-y: scroll;
    }
    .stuff{
        overflow-y: hidden;
    }
</style>