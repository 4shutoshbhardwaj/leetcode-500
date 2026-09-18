/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let i=0;
    function func(max){
        if(i==preorder.length||preorder[i]>max){
            return null;
        }
        let node=new TreeNode(preorder[i++]);
        node.left=func(node.val);
        node.right=func(max);
        return node;
    }
    return func(Infinity);
};