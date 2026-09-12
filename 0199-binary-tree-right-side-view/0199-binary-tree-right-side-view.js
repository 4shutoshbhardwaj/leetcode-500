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
var rightSideView = function(root) {
    let arr=[];
    function RSV(node,i){
        if(!node)return;
        if(arr[i]==undefined){
            arr.push(node.val);
        }
        RSV(node.right,i+1);
        RSV(node.left,i+1);
    }
    RSV(root,0);
    return arr;
};