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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let ans;
    function func(node){
        if(!node)return;
        if(node.val==val){
            ans=node;
            return;
        }
        if(node.val>val){
            func(node.left);
        }else{
            func(node.right);
        }
    }
    func(root);
    return ans?ans:null;
};