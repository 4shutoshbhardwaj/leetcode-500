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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let first;
    let second;
    let prev;
    function func(node){
        if(!node)return;
        func(node.left);
        if(prev&&prev.val>node.val){
            if(!first){
                first=prev;
                second=node;
            }else{
                second=node;
            }
        }
        prev=node;
        func(node.right);
    }
    func(root);
    let temp=first.val;
    first.val=second.val;
    second.val=temp;
    return root;
};