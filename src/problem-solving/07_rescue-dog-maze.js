/**
 * Please find a path to rescue the dog (d) from the maze
 * The maze is a 2 dimensional array which path is ' ' (space) and blocks are '#'
 * you can move left, right, top, up
 *
 * return path should be the array of position numbers order from start to reach dog.
 * 
 * what is the position number?
 * It is the number we assign for each cell in the matrix from left to right and top to bottom in an incremented value.
 * which start from 0 to (size of the matrix - 1)
 *
 * example for calculating position
 * matrix size 8 x 6 (row x column)
 * a[0][1] = 1
 * a[1][1] = 7
 * a[7][5] = 47
 *
 * If you cannot find the path please return undefined.
 *
 * See the test if you have questions.
 */
const rescuePrincessPath = (config) => {
  const { rows, columns, startPosition, maze } = config;

  let minDist = Infinity, counter = 0, result = [], intraverse = [];
  const scores = Array.from({ length: rows }, _ => Array.from({ length: columns }, _ => counter++));
  const visited = Array.from({ length: rows }, _ => new Array(columns).fill(0));
  
  const isValid = (x, y) => x < rows && y < columns && x >= 0 && y >= 0;
  const isSafe = (x, y) => !(maze[x][y] === '#' || visited[x][y]);

  const source = { x: 0, y: maze[0].findIndex(z => z === ' ') };
  const dest = { x: rows - 1, y: maze[rows - 1].findIndex(d => d === 'd') };

  if (dest.y < 0) {
    return;
  }

  const traverseShortest = (startX, startY, dist) => {
    const distNext = dist + 1;
    if (startX === dest.x && startY === dest.y) {
      if (distNext < minDist) {
        minDist = distNext;
        intraverse.push(scores[startX][startY]);
        result = intraverse;
      }
      intraverse = [];
      return;
    }
    visited[startX][startY] = 1;
    intraverse.push(scores[startX][startY]);

    const moveUp = startX + 1;
    if (isValid(moveUp, startY) && isSafe(moveUp, startY)) {
      traverseShortest(moveUp, startY, distNext);
    }
    const moveRight = startY + 1;
    if (isValid(startX, moveRight) && isSafe(startX, moveRight)) {
      traverseShortest(startX, moveRight, distNext);
    }
    const moveDown = startX - 1;
    if (isValid(moveDown, startY) && isSafe(moveDown, startY)) {
      traverseShortest(moveDown, startY, distNext);
    }
    const moveLeft = startY - 1;
    if (isValid(startX, moveLeft) && isSafe(startX, moveLeft)) {
      traverseShortest(startX, moveLeft, distNext);
    }

    visited[startX][startY] = 0;
    intraverse.pop();
  }

  traverseShortest(source.x, source.y, 0);
  return minDist != Infinity ? result : undefined;
}

export {
  rescuePrincessPath,
}
