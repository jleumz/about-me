<script lang="ts">
    export let name: string;
</script>

<main>
    <div class="header-blur">
        <nav>
            <img src="icon.png" alt="logo" />
        </nav>
    </div>
    <h1>Hey.</h1>
    <section>
        <h1>Test</h1>
        <details>
            <summary>Click to toggle content</summary>
            <p>I am content</p>
        </details>
    </section>
    <section>
        <h1>Test</h1>
    </section>
    <section><h1>Test</h1></section>
</main>

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

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
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
