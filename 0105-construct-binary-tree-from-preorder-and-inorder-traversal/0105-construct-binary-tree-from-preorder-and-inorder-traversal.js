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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let primaryNode=new TreeNode(preorder[0]);
    function func(preorder,inorder,node){
        // console.log(preorder,inorder,node);
        if((preorder.length==0))return;
        let midI;
        for(let i=0;i<inorder.length;i++){
            if(node.val==inorder[i]){
                midI=i;
                break;
            }
        }
        let inorderLeft=inorder.slice(0,midI);
        let inorderRight=inorder.slice(midI+1);
        let preorderLeft=preorder.slice(1,inorderLeft.length+1);
        let preorderRight=preorder.slice(inorderLeft.length+1);
        // console.log(inorderLeft,inorderRight,preorderLeft,preorderRight);
        if(preorderLeft.length>=1){
            node.left=new TreeNode(preorderLeft[0]);
            func(preorderLeft,inorderLeft,node.left);
        }
        if(preorderRight.length>=1){
            node.right=new TreeNode(preorderRight[0]);
            func(preorderRight,inorderRight,node.right);
        }
    }
    func(preorder,inorder,primaryNode);
    // console.log(primaryNode);
    return primaryNode;
};