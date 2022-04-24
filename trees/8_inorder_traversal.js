https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/

const printPreOrder = (root, arr) => {
    console.log(root?.val)
    if (root?.val==null) {
      return;
    }
    printPreOrder(root.left, arr);
      arr.push(root.val);
    printPreOrder(root.right,arr);

  };
  
  var inorderTraversal = function (root) {
    const arr = [];
    const preOrder = printPreOrder(root, arr);
    return arr;
  };
   