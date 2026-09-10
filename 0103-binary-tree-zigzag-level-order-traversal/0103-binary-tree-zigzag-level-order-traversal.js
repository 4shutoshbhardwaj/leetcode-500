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
var zigzagLevelOrder = function(root) {
    let result=[];
    function func(node,i){
        if(!node)return;
        if(!result[i]){
            result.push([]);
        }
        if(i%2==0){
            result[i].push(node.val);
            func(node.left,i+1);
            func(node.right,i+1);
        }else{
            result[i].unshift(node.val);
            func(node.left,i+1);
            func(node.right,i+1);
        }
    }
    func(root,0);
    return result;
};