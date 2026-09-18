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
 * @return {number}
 */
var largestBSTSubtree = function(root) {
    let largestBST=0;
    function func(node){
        if(!node){
            return{
                min:Infinity,
                max:-Infinity,
                size:0,
                isBST:true
            }
        }
        let leftBST=func(node.left);
        let rightBST=func(node.right);
        if(leftBST.isBST&&rightBST.isBST&&leftBST.max<node.val&&node.val<rightBST.min){
            let currentSize=1+leftBST.size+rightBST.size;
            largestBST=Math.max(currentSize,largestBST);
            return {
                min:Math.min(leftBST.min,node.val),
                max:Math.max(rightBST.max,node.val),
                size:currentSize,
                isBST:true
            }
        }
        return {
            min:0,
            max:0,
            size:0,
            isBST:false
        }
    }
    func(root);
    return largestBST;
};