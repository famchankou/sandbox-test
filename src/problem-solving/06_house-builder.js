/**
 * Your function should print a house according to the following specification
 *
 * Param 1: height
 * Param 2: width
 * If width is not provided width = height
 *
 * Doors:
 * A door is always 3 fields wide and min 2 and max 3 field high.
 * It is always on the bottom center of the house and always has at least 1 free row above.
 * If it does not fit into the house, there is no door.
 *
 * Windows:
 * There is either (a) no window (not enough space in the house) or (b) two windows in the house.
 * Each window has a size of 3x3.
 * They always have the same distance from each other as from the left and right wall of the house.
 * If the math does not work out the adjustment is done in the center between both windows.
 * Vertically they are always in the center between the top of the door and the bottom of the roof.
 *
 * We rather have a door in the house, then windows.
 *
 * Please implement it generic, not just to fulfill the test.
 * See the test to find the charakters to use and to answer your questions.
 */

const house = (height = 3, width) => {
  if (!width) {
    width = height;
  }
  const roofTop = '^';
  const roofLeft = '/';
  const roofRight = `\\`;
  const bottom = '_';
  const verticalBar = '|';
  const newLine = '\n';
  const space = ' ';

  const buildMatrix = (h, w) => {
    const columns = Array.from({ length: w + 2 }, _ => space);
    const rows = Array.from({ length: h + (Math.floor((w + 3) / 2)) }, _ => [...columns]);
    return rows;
  }

  const buildHouseSkeleton = houseMatrix => {
    const rowsNum = houseMatrix.length;
    const columnsNum = houseMatrix[0].length;
    // set up bottom
    for (let col = 0; col < width + 2; col++) {
      houseMatrix[rowsNum - 1][col] = bottom;
    }
    // set up walls
    for (let row = rowsNum - 1; row > rowsNum - 1 - height; row--) {
      houseMatrix[row][0] = verticalBar;
      houseMatrix[row][width + 1] = verticalBar;
    }
    // set up roof
    let colCenterLeft = Math.floor(columnsNum / 2);
    const roofHeight = rowsNum - height;
    if (width % 2 == 1) {
      let colCenterRight = Math.floor(columnsNum / 2) + 1;
      houseMatrix[0][colCenterLeft] = roofTop;
      for (let row = 1; row < roofHeight; row++) {
        houseMatrix[row][--colCenterLeft] = roofLeft;
        houseMatrix[row][colCenterRight++] = roofRight;
      }
    } else {
      let colCenterRight = Math.floor(columnsNum / 2);
      for (let row = 0; row < roofHeight; row++) {
        houseMatrix[row][--colCenterLeft] = roofLeft;
        houseMatrix[row][colCenterRight++] = roofRight;
      }
    }
  }

  const setUpDoor = houseMatrix => {
    if (width > 2 && height > 1) {
      const rowNum = houseMatrix.length;
      const colNum = houseMatrix[0].length;
      const doorHeight = height > 2 ? 2 : 1;
      const leftShift = Math.floor(colNum / 2);
      
      houseMatrix[rowNum - 1][leftShift] = space;
      houseMatrix[rowNum - 1 - doorHeight][leftShift] = bottom;
      for (let row = rowNum - 1; row > rowNum - 1 - doorHeight; row--) {
        houseMatrix[row][leftShift - 1] = verticalBar;
        houseMatrix[row][leftShift + 1] = verticalBar;
      }
    }
  }

  const setUpWindows = houseMatrix => {
    if (height > 4 && width > 9) {
      const rowNum = houseMatrix.length;
      const colNum = houseMatrix[0].length;
      const bottomShift = Math.floor((height + 4) / 2);
      const leftShift = Math.floor((colNum - 7) / 2);
      const windowsBottom = rowNum - bottomShift;
      
      let windowBuilderStep = 0;
      let gaps = 0;
      for (let col = leftShift; col < leftShift + 8; col++) {
        if (windowBuilderStep < 3) {
          const isBorder = windowBuilderStep == 0 || windowBuilderStep === 2;
           houseMatrix[windowsBottom][col] = isBorder ? verticalBar : bottom;
           houseMatrix[windowsBottom - 1][col] = isBorder ? space : bottom;
           windowBuilderStep++;
        } else {
          if (gaps > 0) {
            windowBuilderStep = 0;
          }
          gaps++;
        }
      }
    }
  }

  const houseMatrixToString = houseMatrix => {
    return houseMatrix.reduce((template, row, i) => {
      template += row.join('').trimRight() + (i === houseMatrix.length - 1 ? '' : newLine);
      return template;
    }, '\n');
  }

  const houseMatrix = buildMatrix(height, width);
  buildHouseSkeleton(houseMatrix);
  setUpDoor(houseMatrix);
  setUpWindows(houseMatrix);
  return houseMatrixToString(houseMatrix);
}

export default house;
