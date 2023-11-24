
<script>
	import Github from './assets/Icons/Github.svelte';
	import Footer from './component/Footer.svelte';
	import Header from './component/Header.svelte';
	import Skills from './component/SecondaryComponents/Skills.svelte';
	import Socials from './component/SecondaryComponents/Socials.svelte';
	import Card from './component/card.svelte';
	</script>

<main>
	<Header>
		<span slot="other-header-content" class="header-text">
			<h1>Welcome to my portfolio</h1>
			<p>Look around and explore the site...</p>
		</span>
	</Header>

	<Card title="Skills" primaryBackground="#3F0071" secondaryBackground = "#150050">
		<div class="card-content" slot="details">
			<Skills/>
		</div>
	</Card>
	<Card title="Socials" primaryBackground="#7752fe" secondaryBackground = "#190482">
		<div class="card-content" slot="details">
			<Socials/>
		</div>
	</Card>
	<Card title="Other projects" primaryBackground="#8e8ffa" secondaryBackground = "#7752fe">
		<div class="card-content-3" slot="details">
			Visit my github page...
			<a href="https://github.com/The-Oracle-AT?tab=repositories" target="_blank">
				<Github size="24"/>
			</a>
		</div>
	</Card>
	<Card title="Fourth card" primaryBackground="#810955" secondaryBackground = "#610c63">
		<div class="card-content" slot="details"></div>
	</Card>
	
	
	<Footer>
		<span slot="other-footer-content" class="footer-text">
			<p>Thanks for visiting my portfolio!</p>
		</span>
	</Footer>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}


	.header-text {
		font-size: 1.5em;
	}
	.header-text p {
		font-size: 0.5em;
		font-weight: normal;
	}
	.card-content-3 {
		display: flex;
		flex-direction: row;
		align-items: center;

	}
</style>