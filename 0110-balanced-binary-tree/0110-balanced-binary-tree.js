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
 * @return {boolean}
 */
var isBalanced = function(root) {
    function count(node){
        if(!node)return 0;
        let l=count(node.left);
        if(l==-1)return -1;
        let r=count(node.right);
        if(r==-1)return -1;
        if(Math.abs(l-r)>1)return -1;
        return 1+Math.max(l,r);
    }
    return count(root)!==-1;
};