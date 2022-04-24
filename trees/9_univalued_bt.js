// https://leetcode.com/problems/univalued-binary-tree/

const isUniVal = (root, val) => {
    if (root == null || root?.val === null) {
      return true;
    }
    if (root?.val !== val) {
      return false;
    }
  
    return isUniVal(root?.left, val) && isUniVal(root?.right, val);
  };
  
  var isUnivalTree = function (root) {
    return isUniVal(root, root.val);
  };