const nArrayPreOrder = (root, arr) => {
    // console.log(root)
  if (!root) {
    return;
  }
  arr.push(root?.val);
  for (const child of root.children) {
    nArrayPreOrder(child,arr);
  }
};

var preorder = function (root) {
  const result = [];
  nArrayPreOrder(root, result);
  return result;
};