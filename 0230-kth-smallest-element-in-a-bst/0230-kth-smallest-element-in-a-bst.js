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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count=0;
    let ans;
    function func(node){
        if(!node)return;
        func(node.left);
        count++;
        if(count==k){
            ans=node.val;
        }
        func(node.right);
    }
    func(root);
    return ans;
};