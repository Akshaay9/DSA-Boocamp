const printPreOrder = (root, arr) => {
    if (!root?.val) {
      return;
    }
    arr.push(root.val);
    printPreOrder(root.left, arr);
    printPreOrder(root.right,arr);
    return;
  };
  
  var preorderTraversal = function (root) {
    const arr = [];
    const preOrder = printPreOrder(root, arr);
    return arr;
  };
   