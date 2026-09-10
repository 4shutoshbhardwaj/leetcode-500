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
var boundaryOfBinaryTree = function(root) {
    let result=[root.val];
        function left(node){
            if(!node)return;
            if(!node.left&&!node.right)return;
            result.push(node.val);
            if(!node.left&&node.right)left(node.right);
            else left(node.left);
        }
        function bottom(node){
            if(!node)return;
            if(!node.left&&!node.right){
                if(node!=root)result.push(node.val);
            }
            bottom(node.left);
            bottom(node.right);
        }
        function right(node){
            if(!node)return;
            if(!node.left&&!node.right)return;
            if(node.left&&!node.right)right(node.left);
            else right(node.right);
            result.push(node.val);
        }
        left(root.left);
        bottom(root);
        right(root.right);
        return result;
};