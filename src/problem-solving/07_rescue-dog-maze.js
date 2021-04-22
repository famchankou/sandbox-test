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


// TODO: at the mmoment finds the paths if only one valid path available
const rescuePrincessPath = (config) => {
  const { rows, columns, startPosition, maze } = config;

  const scores = [];
  let counter = 0;
  for (let i = 0; i < rows; i++) {
    let cols = [];
    for (let j = 0; j < columns; j++) {
       cols.push(counter);
       counter++;
    }
    scores.push(cols);
  }

  const traverse = (maze, i, j, paths) => {
    if (i < 0 || j < 0 || i >= rows || j >= columns || (maze[i][j] !== ' ' && maze[i][j] !== 'd')) {
      return;
    }

    if (maze[i][j] === 'd') {
      paths.push({ i, j, last: true }); // mark last point
      return;
    }

    maze[i][j] = '#'; // marked as passed
    paths.push({ i, j, last: false }); // save path
    traverse(maze, i + 1, j, paths);
    traverse(maze, i - 1, j, paths);
    traverse(maze, i, j + 1, paths);
    traverse(maze, i, j - 1, paths);
  }
  const paths = [];
  traverse(maze, 0, startPosition, paths);

  return paths.reduce((path, point) => {
    path.push(scores[point.i][point.j]);
    return path;
  }, []);

}

export {
  rescuePrincessPath,
}
