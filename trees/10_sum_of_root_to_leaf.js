https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

var sumRootToLeaf = function(root) {
    let sum = 0;
     traverse(root, '');
    return sum;
    
    function traverse(node, bin) {
        if (!node.left && !node.right) {
            sum += parseInt(bin + node.val, 2);
        };
        node.left && traverse(node.left, bin + node.val);
        node.right && traverse(node.right, bin + node.val);
    };
}