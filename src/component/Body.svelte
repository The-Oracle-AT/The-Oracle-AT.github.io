<script>
    import { onMount } from 'svelte';
    import Github from '../assets/Icons/Github.svelte';
    import Skills from './SecondaryComponents/Skills.svelte';
    import Socials from './SecondaryComponents/Socials.svelte';
    import Card from './card.svelte';


    onMount(() => {
        //Adding an observer to the hidden elements
        const observer = new IntersectionObserver((entries) => {
            try {
                entries.forEach((entry) => {
                    console.log(entry);
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                })
            } catch (error) {
                console.log(error);
            }
        });
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((element) => {observer.observe(element);});
    });

    const cardDetails = [
        { cardId: 1, title: "Skills", primaryBackground: "#3F0071",secondaryBackground: "#150050",},
        { cardId: 2, title: "Socials", primaryBackground: "#7752fe", secondaryBackground: "#190482",},
        { cardId: 3, title: "Other projects", primaryBackground: "#8e8ffa", secondaryBackground: "#7752fe",},
        { cardId: 4, title: "Fourth card", primaryBackground: "#810955", secondaryBackground: "#610c63",},
    ];
</script>
<div class="main">
    <section class="hidden">
        <Card title="Skills" primaryBackground="#3F0071" secondaryBackground = "#150050">
            <div class="card-content" slot="details">
                <Skills/>
            </div>
        </Card>
    </section>
    
    <section class="hidden">
        <Card title="Socials" primaryBackground="#7752fe" secondaryBackground = "#190482">
            <div class="card-content" slot="details">
                <Socials/>
            </div>
        </Card>
    </section>
    
    <section class="hidden">
        <Card title="Other projects" primaryBackground="#8e8ffa" secondaryBackground = "#7752fe">
            <div class="card-content-3" slot="details">
                Visit my github page...
                <a href="https://github.com/The-Oracle-AT?tab=repositories" target="_blank">
                    <Github size="24"/>
                </a>
            </div>
        </Card>
    </section>
        
    <section class="hidden">
        <Card title="Fourth card" primaryBackground="#810955" secondaryBackground = "#610c63">
            <div class="card-content" slot="details"></div>
        </Card>
    </section>

    <div class="hidden">
        Consectetur culpa elit Lorem ut magna proident sint. Consequat nulla ea laborum dolore Lorem anim labore commodo officia officia. Enim cupidatat occaecat dolore reprehenderit non veniam elit esse do nisi ad velit ad. Excepteur velit culpa magna elit tempor aliquip aliquip officia. Occaecat ipsum in aliqua nostrud culpa. Amet sit est mollit elit cupidatat non qui ad.Velit ipsum dolor irure laboris enim labore sit. Sit commodo duis reprehenderit irure ipsum culpa incididunt ea elit non. Ad sunt laboris veniam nisi elit amet ullamco. Et duis ut nulla aute do duis officia fugiat.
        Est anim aliquip minim sit labore amet do. Exercitation non ea pariatur aliquip elit tempor consequat sint pariatur nostrud dolore aliqua ut laboris. Laboris ullamco officia aute culpa fugiat elit. Labore anim irure ex officia non id exercitation sint duis et cillum. Eiusmod nostrud reprehenderit laboris magna amet irure culpa velit ex amet anim est elit. Excepteur velit duis laborum velit eiusmod est sint.
        Eiusmod ad ullamco minim exercitation dolore magna ullamco non non mollit reprehenderit incididunt pariatur ad. Laborum veniam fugiat laborum consectetur tempor nostrud magna mollit. Nisi aliquip sit consequat officia velit quis ea. Cupidatat ex Lorem qui dolore ea exercitation Lorem fugiat qui velit. Reprehenderit dolore ad aliqua velit excepteur velit sunt duis adipisicing dolore aute quis ea. Aliquip sit eu sunt reprehenderit fugiat enim ullamco esse nisi laboris aliquip. Dolore ad quis sunt laboris magna consectetur dolor.
        Laborum do commodo proident enim ullamco deserunt incididunt. Voluptate mollit veniam id ex deserunt. Est Lorem in nisi Lorem esse nisi sunt sunt. Esse commodo occaecat velit nisi ut ipsum eiusmod proident ex ut aliquip velit sint.
    </div>
</div>



<style>
    .card-content-3 {
		display: flex;
		flex-direction: row;

	}
    .main {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 2em;
    }


</style>
