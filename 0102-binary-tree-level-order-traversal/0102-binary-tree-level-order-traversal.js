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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result=[];
    function levelorderTraversal(node,i){
        if(!node)return;
        if(!result[i]){
            result.push([]);
            result[i].push(node.val);
        }else{
            result[i].push(node.val);
        }
        levelorderTraversal(node.left,i+1);
        levelorderTraversal(node.right,i+1);
    }
    levelorderTraversal(root,0);
    return result;
};