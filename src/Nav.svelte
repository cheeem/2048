<script>

  //import svgs
  import svg_github from './svg/github.svg';

  //define socials
  const socials = [
    { href: 'https://github.com/cheeem/2048', svg: svg_github },
  ];

</script>
  
<nav>

  <ul class="socials">
    {#each socials as { href, svg }}
      <a {href} target="_blank" rel="noreferrer">
        <li>
          <img src={svg} alt="" />
        </li>
      </a>
    {/each}
  </ul>

</nav>
  
<style>
  
  nav {
    position: absolute;
    top: 1.5em;
    right: 2em;
  }

  .socials {
    display: flex;
    
    gap: 1em;
  }

  li:hover img {
    scale: 1.2;
  }

  img {
    width: calc(1.75rem + 1.75em);

    filter: var(--filter-white);

    transition: 0.3s;
  }

  @media screen and (min-width: 480px) {

    .socials {
      flex-direction: column;
    }

  }

</style>
  