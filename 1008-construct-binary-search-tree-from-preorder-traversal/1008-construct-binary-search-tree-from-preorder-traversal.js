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
    let inorder=[...preorder];
    inorder.sort((a,b)=>a-b);
    let primaryNode=new TreeNode(preorder[0]);
    function func(node,inorder,preorder){
        if(!node)return;
        if(preorder.length==0)return;
        let idx;
        for(let i=0;i<inorder.length;i++){
            if(preorder[0]==inorder[i]){
                idx=i;
                break;
            }
        }
        let inorderLeft=inorder.slice(0,idx);
        let inorderRight=inorder.slice(idx+1);
        let preorderLeft=preorder.slice(1,inorderLeft.length+1);
        let preorderRight=preorder.slice(inorderLeft.length+1);
        if(preorderLeft.length>=1){
            node.left=new TreeNode(preorderLeft[0]);
            func(node.left,inorderLeft,preorderLeft);
        }
        if(preorderRight.length>=1){
            node.right=new TreeNode(preorderRight[0]);
            func(node.right,inorderRight,preorderRight);
        }
        // console.log(inorderLeft,inorderRight,preorderLeft,preorderRight);
    }
    func(primaryNode,inorder,preorder);
    return primaryNode;
};