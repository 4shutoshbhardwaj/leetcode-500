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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let max=0;
    function diameter(node){
        if(!node)return 0;
        let l=diameter(node.left);
        let r=diameter(node.right);
        max=Math.max(max,l+r);
        return Math.max(l,r)+1;
    }
    diameter(root);
    return max;
};