/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let primaryNode=new TreeNode(postorder[postorder.length-1]);
    function func(inorder,postorder,node){
        if(postorder.length==0)return;
        let midI;
        for(let i=inorder.length-1;i>=0;i--){
            if(node.val==inorder[i]){
                midI=i;
                break;
            }
        }
        let inorderLeft=inorder.slice(0,midI);
        let inorderRight=inorder.slice(midI+1);
        let postorderRight=postorder.slice(postorder.length-inorderRight.length-1,postorder.length-1);
        let postorderLeft=postorder.slice(0,postorder.length-inorderRight.length-1);
        // console.log(inorderLeft,inorderRight,postorderLeft,postorderRight);
        if(postorderLeft.length>=1){
            node.left=new TreeNode(postorderLeft[postorderLeft.length-1]);
            func(inorderLeft,postorderLeft,node.left);
        }
        if(postorderRight.length>=1){
            node.right=new TreeNode(postorderRight[postorderRight.length-1]);
            func(inorderRight,postorderRight,node.right);
        }
    }
    func(inorder,postorder,primaryNode);
    return primaryNode;
};