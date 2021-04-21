/**
 * Get the last n data elements from the nested object
 *
 * See the test if you have questions
 */

const getLastNumbers = (obj, level) => {
  // easier solution to traverse all LinkedList till the end in while(node.next), push to array and take last N items
  const items = [];
  items.levelCount = 1;
  items.totalCount = 0;
  const traverseBottomUp = (obj, items) => {
    if (obj.next) {
      const value = traverseBottomUp(obj.next, items);
      if (items.levelCount <= level) {
        items.push(value);
        items.levelCount++;
      }
    }
    items.totalCount++;
    return obj.data;
  }
  const firstItem = traverseBottomUp(obj, items);
  if (items.totalCount <= level) {
    items.push(firstItem);
  }

  return [...items.reverse()];
}

export {
  getLastNumbers,
}
