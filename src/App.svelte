<script>

  //import svgs
  import svg_github from './svg/github.svg';

  //import lifecycle handlers
  import { onMount } from 'svelte';

  //import transitions
  import { scale } from 'svelte/transition';

  //import event listeners
  import { swipe } from 'svelte-gestures';

  //define color amount
  let colors = 7;

  //define the initial grid size
  let grid_size = 3;

  //define amount of initial blocks
  let initial_blocks = 2;

  //define the initial maximum block value
  let max = 2;

  //define the initial goal
  let goal = 32;

  //define difference between the current and next goal exponent
  let exponent_difference = 3;

  //define block/grid dimensions
  $: block_size = 12 / grid_size;
  $: gap = block_size / 5;

  //define blocks
  let blocks = {};

  //generate a number between the max and min, inclusive
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  //start game 
  const start = () => {

    //empty blocks
    blocks = {};

    //create initial blocks at random positions
    for(let i = 0; i < initial_blocks; i++) create(Object.values(blocks));

  }

  //expand the grid to a larger size and set the next exponent goal
  const upgrade_grid = () => {

    //if the exponent differnece is 0, return
    if(!exponent_difference) return;

    //increase the exponent goal by the exponent difference
    goal *= 2 ** exponent_difference;

    //increment the grid size
    grid_size++;

    //decrement the exponent difference
    exponent_difference--;

  }

  //define valid keys
  const KEYS = {
    //arrow directions
    'ArrowUp': 'UP',
    'ArrowDown': 'DOWN',
    'ArrowLeft': 'LEFT',
    'ArrowRight': 'RIGHT',
    //keyboard directions
    'w': 'UP',
    's': 'DOWN',
    'a': 'LEFT',
    'd': 'RIGHT',
    //swipe directions
    'top': 'UP',
    'bottom': 'DOWN',
    'left': 'LEFT',
    'right': 'RIGHT',
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
  $: create = blocks_array => {

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
    let value = !random(0, 9) && blocks_array.length ? 4 : 2;

    //create a key-value pair in blocks between the id and the block data
    blocks[id] = {
      id, 
      x,
      y,
      value,
    }
    
  }

  //determine if each block can move in the given direction 
  $: move = direction => {

    //define moved state
    let moved = false;
    
    //sort and attempt to move each block
    Object.values(blocks).sort(SORTS[direction]).forEach((block, i, sorted) => {

      //get the movement parameters
      const { main_axis, cross_axis, increment, limit, } = PARAMS[direction];

      //keep attempting to move the iterated block until returned
      while(true) {

        //get the main coordinate, cross coordinate, and value of the iterated block
        let { [main_axis]: main_coordinate, [cross_axis]: cross_coordinate, value, } = block;

        //if the main coordinate meets the limit, return
        if(main_coordinate === limit) return;

        //increment the main coordinate
        main_coordinate += increment;

        //get the next block
        const next = sorted[i - 1];

        //determine if the block is adjacent to the next block
        const has_next_block = main_coordinate === next?.[main_axis] && cross_coordinate === next?.[cross_axis];

        //if the block is adjacent to the next block and the values of each block are not the same, return
        if(has_next_block && value !== next.value) return;

        //set the main coordinate of the block to the main coordinate
        block[main_axis] = main_coordinate;

        //set moved state to true
        moved = true;

        //if the block is not adjacent to the next block, continue
        if(!has_next_block) continue;

        //delete the next block 
        delete blocks[next.id];

        //muliply the next block's value by 2
        block.value *= 2;
      
        //return
        return;

      }

    });

    //return moved state
    return moved;

  }

  //handle key/swipe events
  const handle = event => {

    //get the event key
    const key = event.detail.direction ?? event.key;

    //if the key is not valid, return
    if(!KEYS[key]) return;

    //move in the selected direction
    let moved = move(KEYS[key]);

    //update blocks
    blocks = { ...blocks, };

    //convert blocks to an array format
    const blocks_array = Object.values(blocks);

    //if the player cannot move, return and restart the game
    if(blocks_array.length === grid_size ** 2) return start();

    //get the maximum block value
    max = blocks_array.reduce((max, {value}) => max < value ? value : max, 2);

    //if the exponent goal has been met, upgrade the grid
    if(max === goal) upgrade_grid();

    //if a block has moved, create a new block at a random position 
    if(moved) create(blocks_array);

  }

  //start game on mount
  onMount(start);

  //define socials
  const socials = [
    { href: 'https://github.com/cheeem/2048', svg: svg_github },
  ];

</script>

<svelte:window on:keydown|preventDefault={handle} />

<main use:swipe={{ timeframe: 1000, minSwipeDistance: 10, touchAction: 'none', }} on:swipe={handle}>

  <nav>

    <div class="goal"> 
      {max} / {goal}
    </div>

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

  <div class="board" style={`
    --block-size: ${block_size}em;
    --gap: ${gap}em;
  `}> 

    <div class="grid" style={`
      grid-template-columns: repeat(${grid_size}, 1fr)
    `}>
      {#each { length: grid_size ** 2 } as _}
        <div class="block space" style={`
          border-radius: ${gap / 1.5}em;
        `}> </div>
      {/each}
    </div>

    {#each Object.values(blocks) as { value, x, y, id, } (id)}
      <div class="block value" in:scale style={`
        top: ${y * (block_size + gap)}em;
        left: ${x * (block_size + gap)}em;
        background-color: var(--color${Math.log2(value) % colors + 1}-07);
        border: 0.2em solid var(--color${Math.log2(value) % colors + 1});
        border-radius: ${gap / 1.5}em;
      `}> 
        <div class="label" style={`
          font-size: ${block_size / (2.5 + (Math.floor(Math.log10(value)) / 3.5))}em
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

    font-size: calc(0.75em + 1.75vw);
  }

  nav {
    position: absolute;
    top: 0;
    left: 0;

    padding: 1.25em 2em;

    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
  }

  .goal {
    font-size: 1.5em;
    font-weight: 600;
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

    border: 0.2em solid var(--lightgrey);
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
