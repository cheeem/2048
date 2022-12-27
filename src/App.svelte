<script>

  //import lifecycle handlers
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';

  //define color amount
  let colors = 7;

  //define block/grid dimensions
  let block_size = 2.5;
  let gap = 0.5;

  //define grid size
  let grid_size = 4;

  //define amount of initial blocks
  let initial_blocks = 2;

  //define blocks
  let blocks = {};

  //generate a number between the max and min, inclusive
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  //define valid keys
  const KEYS = {
    'ArrowUp': 'UP',
    'ArrowDown': 'DOWN',
    'ArrowLeft': 'LEFT',
    'ArrowRight': 'RIGHT',
  }

  //define block sorts
  $: SORTS = {
    'UP': (a, b) => ((a.x * grid_size) + (a.y)) - ((b.x * grid_size) + (b.y)),
    'DOWN': (a, b) => ((b.x * grid_size) + (b.y)) - ((a.x * grid_size) + (a.y)),
    'RIGHT': (a, b) => ((b.x) + (b.y * grid_size)) - ((a.x) + (a.y * grid_size)),
    'LEFT': (a, b) => ((a.x) + (a.y * grid_size)) - ((b.x) + (b.y * grid_size)),
  }

  //define block movement parameters
  $: PARAMS = {
    'UP': { main_axis: 'y', cross_axis: 'x', increment: -1, limit: 0, },
    'DOWN': { main_axis: 'y', cross_axis: 'x', increment: 1, limit: grid_size-1, },
    'LEFT': { main_axis: 'x', cross_axis: 'y', increment: -1, limit: 0, },
    'RIGHT': { main_axis: 'x', cross_axis: 'y', increment: 1, limit: grid_size-1, },
  }

  //create a new block
  $: create = () => {

    //convert blocks to an array format
    let blocks_array = Object.values(blocks);

    //define the block id
    let id = 0;

    //generate a new id while the id exists in blocks
    do id = Math.random(); while(blocks[id]);

    //define the block 
    let x = 0;
    let y = 0;

    //generate a new x and y coordinate
    do {

      //set x to a random integer bwtween 0 and 1 less than the grid size 
      x = random(0, grid_size - 1);

      //set y to a random integer bwtween 0 and 1 less than the grid size 
      y = random(0, grid_size - 1);

    //while there is a block at the x and y coordinate
    } while(blocks_array.some(block => block.x === x && block.y === y));

    //define the block value as 2 with a 1/10 chance of being 4
    let value = !random(0, 9) ? 4 : 2

    //create a key-value pair in blocks between the id and the block data
    blocks[id] = {
      id, 
      x,
      y,
      value,
    }
    
  }

  //
  $: move = KEY => Object.values(blocks).sort(SORTS[KEY]).forEach((block, i, sorted) => {

    //
    const { main_axis, cross_axis, increment, limit, } = PARAMS[KEY];

    //
    while(true) {

      //
      let { [main_axis]: main_coordinate, [cross_axis]: cross_coordinate, value } = block;

      //
      if(main_coordinate === limit) return;

      //
      main_coordinate += increment;

      //
      const next = sorted[i - 1];

      //
      const has_next_block = main_coordinate === next?.[main_axis] && cross_coordinate === next?.[cross_axis];

      //
      if(has_next_block && value !== next.value) return;

      //
      block[main_axis] = main_coordinate;

      //
      if(!has_next_block) continue;

      //
      delete blocks[next.id];

      //
      block.value *= 2;
     
      //
      return;

    }

  });

  //
  onMount(() => { for(let i = 0; i < initial_blocks; i++) create() });

</script>

<svelte:window on:keydown|preventDefault={event => {

  //
  if(!KEYS[event.key]) return;

  //
  move(KEYS[event.key]);

  //
  blocks = { ...blocks };

  //
  create();

}} />

<main>

  <div class="board" style={`
    --block-size: ${block_size}em;
    --gap: ${gap}em;
  `}> 

    <div class="grid" style={`
      grid-template-columns: repeat(${grid_size}, 1fr)
    `}>
      {#each { length: grid_size ** 2 } as _}
        <div class="block space"> </div>
      {/each}
    </div>

    {#each Object.values(blocks) as { value, x, y, id, } (id)}
      <div class="block value" in:scale style={`
        top: ${y * (block_size + gap)}em;
        left: ${x * (block_size + gap)}em;
        background-color: var(--color${Math.log2(value) % colors + 1}-07);
        border: 0.2em solid var(--color${Math.log2(value) % colors + 1});
      `}> 
        <div class="label" style={`
          font-size: ${1 / (1 + (Math.floor(value / 10) / 400))}em
        `}> {value} </div>
      </div>
    {/each}

  </div>

</main>

<style>

  main {
    display: grid;
    place-items: center;

    height: 100vh;

    background: var(--darkgrey);

    font-size: calc(0.5em + 2vw);
  }

  .board {
    position: relative;
  }

  .grid {    
    display: grid;
    gap: var(--gap);
  }

  .block {
    height: var(--block-size);
    width: var(--block-size);

    background-color: var(--white);

    border-radius: 0.3em;
  }

  .value {
    position: absolute;

    display: grid;
    place-items: center;

    transition: 0.3s ease;
  }

  .label {
    font-weight: 600;

    color: var(--white);
  }

</style>
