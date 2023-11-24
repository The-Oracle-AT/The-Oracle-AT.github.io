<script>
    import Github from "../../assets/Icons/Github.svelte";
    import LinkedIn from "../../assets/Icons/LinkedIn.svelte";
    let size = 50
</script>

<ul>
    <li><a href="https://www.linkedin.com/in/lapane-maela" target="_blank">
        <LinkedIn {size}/>
    </a></li>
    <li><a href="https://github.com/The-Oracle-AT?tab=repositories" target="_blank">
        <Github {size}/>
    </a></li>
</ul>

<style>
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style: none;
        padding: 0;
        font-weight: bold;
    }

    li {
        margin: 0.7em;
        transition: transform 0.3s ease-in-out; /* Removed box-shadow transition */
    }
    

    li:hover {
        transform: translateY(-5px); /* Added hover transform */
        
    }

</style>