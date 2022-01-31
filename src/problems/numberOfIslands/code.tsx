import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const IMPLEMENTATION = `/**
* @param {character[][]} grid
* @return {number}
*/
var numIslands = function(grid) {
   let count = 0;
   
   for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) { 
          if (grid[i][j] === '1') {
              count+=1;
              dfs(grid, i, j);
          }
       }
   }
   
   return count;
};

const dfs = (grid, i, j) => {
  if (i >= 0 &&
      j >= 0 &&
      grid.length > i &&
      grid[0].length > j &&
      grid[i][j] === '1'
    ) {
      grid[i][j] = '0';
      dfs(grid, i, j+1);
      dfs(grid, i, j-1);
      dfs(grid, i+1, j);
      dfs(grid, i-1, j);
  }  
};`;

const Code = () => {
  return (
    <>
      <h3>Implementation</h3>
      <div className="código-row">
        <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
          {IMPLEMENTATION}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Code;
