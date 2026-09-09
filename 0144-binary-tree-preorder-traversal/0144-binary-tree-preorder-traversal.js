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
var preorderTraversal = function(root) {
    let result=[];
    function preorderTraversal(node){
        if(!node)return;
        result.push(node.val);
        preorderTraversal(node.left);
        preorderTraversal(node.right);
    }
    preorderTraversal(root);
    return result;
};