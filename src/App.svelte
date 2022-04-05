<script lang="ts">
    export let name: string;
</script>


<header class="header-blur">
    <nav>
        <img src="icon.png" alt="logo" />
    </nav>
</header>
<main>
    <h1>Hey.</h1>
    <section>
        <h1>Test</h1>
        <a href="https://www.google.com" target="_blank"><p>Hello</p></a>
        <details class="basic">
            <summary>Click to toggle content</summary>
            <p>I am content</p>
        </details>
        <h2>Test</h2>
        <h3>Test</h3>
    </section>
    <section>
        <h1>Test</h1>
    </section>
    <section><h1>Test</h1></section>
</main>
<footer>Footer</footer>

<style>
    main {
        text-align: center;
        /* padding: 1em; */
        max-width: 240px;
        margin: 0 auto;
    }

    .header-blur {
        backdrop-filter: saturate(1.5) blur(20px);
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .basic {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 15px;
        color: #222;
    }

    summary {
        cursor: pointer;
    }

    /* change marker of toggle */
    /* details[open] > summary::marker {
        display: none;
        content: "- ";
    } */

    nav {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }

    img {
        width: 50px;
        height: 50px;
        object-fit: fill;
        padding-right: 1vw;
    }

    section {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100%;
        padding: 100px 10vw;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
