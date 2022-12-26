import * as React from 'react';
import * as Utils from './utils.js';

const COLORS = {
  GRID_BG: 2,
  SQR_BG: 1,
  VAL_BG: 5,
  VAL_TXT: 3,
}

const MOVEMENT = {
  'ArrowUp': {plane: 'row', direction: -1},
  'ArrowDown': {plane: 'row', direction: 1},
  'ArrowLeft': {plane: 'col', direction: -1},
  'ArrowRight': {plane: 'col', direction: 1},
}

const posToIndex = (pos) => (pos.row*4)+pos.col;

const stopMovement = (planePos, nextSquare, value) => {
  //if the square tries to exceed the grid's boundries, stop movement
  if(planePos < 0) return true;
  //if the square tries to exceed the grid's boundries, stop movement
  if(planePos > 3) return true;
  //if the next square has a value and that value is not the same value as the focused square, stop movement
  if(nextSquare && nextSquare.value !== value) return true;
  //otherwise, keep moving
  return false;
}

export const Grid = ({ size, factor }) => {

  const setupSquares = (squares) => {
    for(let i = 0; i < size**2; i++) squares.push({
      ID: i,
      value: 0,
      row: Math.floor(i/4),
      col: i%4,
    });
    for(let i = 0; i < 2; i++) squares = addValue(squares);
    return squares;
  }

  const addValue = (squares) => {
    let i = 0;
    do { i = Utils.randomIndex(squares) } while (squares[i].value);
    squares[i].value = factor;
    return [...squares];
  }

  //define squares
  const [squares, setSquares] = React.useState(setupSquares([]));

  const moveValue = (square, movement) => {
    while(true) {
      //define necessary variables
      let {plane, direction} = movement;
      let {row, col, value} = square;
      let pos = {row, col};
      let nextPos = {...pos, [plane]: pos[plane]+parseInt([direction])};
      let index = posToIndex(pos);
      let nextIndex = posToIndex(nextPos);
      //if movement needs to stop, break
      if(stopMovement(nextPos[plane], squares[nextIndex], value)) break;
      console.log('moving');
      //set the square's value to 0
      squares[index].value = 0;
      //if the squares values are the same, combine them and break
      if(squares[nextIndex].value === value) { squares[nextIndex].value *= 2; break; }
      //if the next square doesn't contain a value, pass the focused squares value to it
      squares[nextIndex].value = value;
      //set the focused square to the next square, now containing the value
      square = squares[nextIndex];
      //update square state
      setSquares(() => [...squares]);
      //repeat
    }
  }

  //key event listener
  React.useEffect(() => {
    document.addEventListener('keydown', (e) => {
      e.stopImmediatePropagation();
      //return if invalid key selected
      if(!MOVEMENT[e.key]) return;
      //get all active squares (squares that have values)
      let activeSquares = squares.filter(square => square.value);
      //for each square move the value to the next square relative to its movement plane and direction


      /* NOTE: ORDER VALUES BEING MOVED BY THEIR DISTANCE TO THE MAX */
      activeSquares.forEach(square => moveValue(square, MOVEMENT[e.key]));
    });
  });

  return (
    <> 
      <div className="grid"
        onKeyPress={(e) => console.log(e)}
      >
        {squares.map(square => {
          return <Square 
            //Identifier
            key={square.ID}
            //value
            value={square.value}
          />;
        })}
      </div>

      <style>
        {`
          .grid {
            display: grid;
            grid-template-columns: repeat(${size}, 1fr);
            gap: calc(0.25em + 0.5vw);

            height: 40vw;
            width: 40vw;

            padding: calc(0.25em + 1vw);

            background-color: ${Utils.color(COLORS.GRID_BG)};

            border-radius: 0.75em;
          }
        `}
      </style> 
    </>
  )
}

const Square = ({value}) => {
  return (
    <>
      <div className={`square ${value ? 'active' : ''}`}>
        <div className='value'>
            {value || 0}
        </div>
      </div>
      <style>
        {`
          .square {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0.25em;

            background-color: ${Utils.color(COLORS.SQR_BG)};
          }
          
          .active {
            background-color: ${Utils.color(COLORS.VAL_BG)};
          }

          .square>.value {
            color: ${Utils.color(COLORS.SQR_BG)};
          }

          .active>.value {
            color: ${Utils.color(COLORS.VAL_TXT)};
          }
        `}
      </style> 
    </>
  )
}