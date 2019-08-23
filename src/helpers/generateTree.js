function generateTree(items, valueKey = 'id', valueParentKey = 'parentId') {
  let tree = [],
    mappedItems = {},
    mappedElem;

  items.map(item => {
    mappedItems[item[valueKey]] = item;
    mappedItems[item[valueKey]].children = [];
    mappedItems[item[valueKey]].open = true;
  });

  for (let id in mappedItems) {
    mappedElem = mappedItems[id];
    if (mappedElem[valueParentKey]) {
      mappedItems[mappedElem[valueParentKey]].children.push(mappedElem);
    } else {
      tree.push(mappedElem);
    }
  }
  return tree;
}

export default generateTree;
