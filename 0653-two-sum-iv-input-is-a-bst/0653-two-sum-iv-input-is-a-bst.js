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
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let obj={};
    let t=false;
    function func(node){
        if(!node)return;
        let key=k-node.val;
        if(obj[key]){
            t=true;
            return;
        }else if(!t){
            obj[node.val]=1;
            func(node.left);
            func(node.right);
        }
    }
    func(root);
    return t;
};