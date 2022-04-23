/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const printPreOrder = (root, arr) => {
    if (!root?.val) {
      return;
    }
    printPreOrder(root.left, arr);
    printPreOrder(root.right,arr);
      arr.push(root.val);
  
  };
  
  var postorderTraversal = function (root) {
    const arr = [];
    const preOrder = printPreOrder(root, arr);
    return arr;
  };
   