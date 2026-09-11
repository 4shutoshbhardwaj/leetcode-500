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
var rightSideView = function(root) {
    if(!root)return [];
    let q=[root];
    let result=[];
    while(q.length){
        let n=q.length;
        for(let i=0;i<n;i++){
            let node=q.shift();
            if(i==n-1){
                result.push(node.val);
            }
            if(node.left)q.push(node.left);
            if(node.right)q.push(node.right);
        }
    }
    return result;
};