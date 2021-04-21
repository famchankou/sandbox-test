import { rescuePrincessPath } from './07_rescue-dog-maze.js';

describe('maze', () => {
  it('should return path for rescue princess maze1', () => {
    const maze = [
      ['#', ' ', '#', '#', '#', '#'],
      ['#', ' ', ' ', '#', '#', '#'],
      ['#', '#', ' ', '#', '#', '#'],
      ['#', '#', ' ', '#', '#', '#'],
      ['#', '#', ' ', ' ', '#', '#'],
      ['#', '#', '#', ' ', ' ', ' '],
      ['#', '#', '#', '#', '#', ' '],
      ['#', '#', '#', '#', '#', 'd'],
    ];
    const rows = maze.length;
    const columns = maze[0].length;
    const startPosition = 1;
    expect(
      rescuePrincessPath({
        rows,
        columns,
        startPosition,
        maze,
      })
    ).toEqual([1, 7, 8, 14, 20, 26, 27, 33, 34, 35, 41, 47]);
  });

  it('should return path for rescue princess maze2', () => {
    const maze = [
      [' ', '#', '#', '#', '#', '#'],
      [' ', '#', ' ', ' ', ' ', '#'],
      [' ', '#', ' ', '#', ' ', ' '],
      [' ', '#', ' ', '#', '#', ' '],
      [' ', ' ', ' ', '#', ' ', ' '],
      ['#', '#', '#', '#', ' ', '#'],
      ['#', '#', '#', '#', ' ', '#'],
      ['#', '#', '#', 'd', ' ', '#'],
    ];

    const rows = maze.length;
    const columns = maze[0].length;
    const startPosition = 0;

    expect(
      rescuePrincessPath({
        rows,
        columns,
        startPosition,
        maze,
      })
    ).toEqual([0, 6, 12, 18, 24, 25, 26, 20, 14, 8, 9, 10, 16, 17, 23, 29, 28, 34, 40, 46, 45]);
  });

  it('should return path for rescue princess maze3', () => {
    const maze = [
      ['#', '#', '#', ' ', '#', '#'],
      ['#', ' ', ' ', ' ', ' ', ' '],
      ['#', ' ', '#', ' ', '#', ' '],
      ['#', ' ', ' ', ' ', '#', ' '],
      ['#', '#', '#', '#', ' ', ' '],
      ['#', '#', '#', ' ', ' ', '#'],
      ['#', '#', '#', ' ', '#', '#'],
      ['#', '#', 'd', ' ', '#', '#'],
    ];

    const rows = maze.length;
    const columns = maze[0].length;
    const startPosition = 3;

    expect(
      rescuePrincessPath({
        rows,
        columns,
        startPosition,
        maze,
      })
    ).toEqual([3, 9, 10, 11, 17, 23, 29, 28, 34, 33, 39, 45, 44]);
  });

  it('should return undefined if not path found to rescue the princess maze4', () => {
    const maze = [
      ['#', '#', '#', '#', '#', ' '],
      ['#', '#', ' ', ' ', '#', ' '],
      ['#', ' ', '#', ' ', '#', ' '],
      ['#', ' ', ' ', ' ', '#', ' '],
      ['#', '#', '#', '#', ' ', ' '],
      ['#', '#', '#', ' ', ' ', '#'],
      ['#', '#', '#', '#', '#', '#'],
      ['#', '#', 'd', '#', '#', '#'],
    ];

    const rows = maze.length;
    const columns = maze[0].length;
    const startPosition = 5;

    expect(
      rescuePrincessPath({
        rows,
        columns,
        startPosition,
        maze,
      })
    ).toEqual(undefined);
  });
});
