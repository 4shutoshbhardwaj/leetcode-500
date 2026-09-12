/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function func(node){
        if(!node)return null;
        if(node.val==q.val||node.val==p.val)return node;
        let left=func(node.left);
        let right=func(node.right);
        if(left==null)return right;
        if(right==null)return left;
        return node;
    }
    return func(root);
};