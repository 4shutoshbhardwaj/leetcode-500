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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let result=[];
    function rtl(node,s){
        if(!node)return;
        s=s+node.val;
        if(!node.right&&!node.left){
            result.push(s);
            return;
        }
        s=s+"->";
        rtl(node.left,s);
        rtl(node.right,s);
    }
    rtl(root,"");
    return result;
};