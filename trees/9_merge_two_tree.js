// https://leetcode.com/problems/merge-two-binary-trees/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  
  const mergeIt = (tree1, tree2) => {
    if (tree1?.val == null) {
      return tree2;
    }
  
    if (tree2?.val == null) {
      return tree1;
    }
    const newNode = new TreeNode(tree1.val + tree2.val);
  
    newNode.left = mergeIt(tree1?.left, tree2?.left);
    newNode.right = mergeIt(tree1?.right, tree2?.right);
    return newNode;
  };
  
  var mergeTrees = function (root1, root2) {
    return mergeIt(root1, root2);
  };

  /////

const mergeIt = (tree1, tree2) => {
    if (tree1 == null) {
      return tree2;
    }
  
    if (tree2 == null) {
      return tree1;
    }
     tree1.val += tree2.val;
  
    tree1.left = mergeIt(tree1?.left, tree2?.left);
    tree1.right = mergeIt(tree1?.right, tree2?.right);
    return tree1;
  };
  
  var mergeTrees = function (root1, root2) {
    return mergeIt(root1, root2);
  };