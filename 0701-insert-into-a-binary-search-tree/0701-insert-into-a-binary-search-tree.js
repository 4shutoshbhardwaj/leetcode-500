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
var insertIntoBST = function(root, val) {
    if(!root)return new TreeNode(val);
    function func(node){
        if(!node)return;
        if(val>node.val&&!node.right){
            node.right=new TreeNode(val);
        }else if(val<node.val&&!node.left){
            node.left=new TreeNode(val);
        }
        if(val>node.val){
            func(node.right);
        }
        if(val<node.val){
            func(node.left);
        }
    }
    func(root);
    return root;
};