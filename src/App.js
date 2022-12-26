import * as React from 'react';
import * as Utils from './utils.js';
import { Grid } from './Grid.js';


const gridSize = 4;
const factor = 2;

const colorPalette = [
  '#FFF3E4',
  '#EED6C4',
  '#DEB6AB',
  '#6B4F4F',
  '#483434',
  '#FFF5BA',
];

const COLORS = {
  APP_BG: 0,
  APP_TXT: 3,
}

function App() {

  return (
    <> 
      <div className="app">
        <Grid size={gridSize} factor={factor} />
      </div>

      <style>
        {`
          * {
            box-sizing: border-box;

            margin: 0;
            padding: 0;

            font-family: 'Poppins', sans-serif;
            font-size: calc(1em + 0.5vw);
            font-weight: 800;
            color: ${Utils.color(COLORS.APP_TXT)}
          }

          :root {
            ${colorPalette.map((color, i) => `--color-${i}: ${color};`).join('\n')}
          }

          .app {
            display: flex;
            justify-content: center;
            align-items: center;

            height: 100vh;

            background-color: ${Utils.color(COLORS.APP_BG)}
          }
        `}
      </style>
    </>
  );
}

export default App;
