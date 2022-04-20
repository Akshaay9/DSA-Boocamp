var maxDepth = function (root) {
    if (root?.val===null || root?.val===undefined) {
      return 0;
    }
    const right = 1 + maxDepth(root.right);
    const left = 1 + maxDepth(root.left);
    return Math.max(right, left);
  };
  console.log(maxDepth(binary));