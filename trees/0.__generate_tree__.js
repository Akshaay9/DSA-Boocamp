function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  
  function Node(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
  
  function insertNode(tree, value) {
    var node = tree,
      key;
    while (node.value !== value) {
      key = value < node.value ? "left" : "right";
      if (!node[key]) {
        node[key] = new Node(value);
        break;
      }
      node = node[key];
    }
    return tree;
  }
  const genrateTree = (array) => {
    return array.reduce((t, v) => (t ? insertNode(t, v) : new Node(v)), null);
  };
  
  //////////////////////////////////////////////////////////////////
  
  