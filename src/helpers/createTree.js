function createTree(items) {
  let tree = [],
    mappedItems = {},
    mappedElem;

  items.map(item => {
    mappedItems[item.ID] = item;
    mappedItems[item.ID].children = [];
    mappedItems[item.ID].open = true;
  });

  for (let id in mappedItems) {
    mappedElem = mappedItems[id];
    if (mappedElem.parentID) {
      mappedItems[mappedElem.parentID].children.push(mappedElem);
    } else {
      tree.push(mappedElem);
    }
  }
  return tree;
}

export default createTree;
