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
var widthOfBinaryTree = function(root) {
    if(!root)return 0;
    let q=[[root,0]];
    let ans=0;
    let k=0;
    while(k<q.length){
        let n=q.length-k;
        let first=q[k][1];
        let last=q[q.length-1][1];
        ans=Math.max(ans,last-first+1);
        for(let i=0;i<n;i++){
            let [node,pos]=q[k++];
            pos=pos-first;
            if(node.left){
                q.push([node.left,pos*2]);
            }
            if(node.right){
                q.push([node.right,pos*2+1]);
            }
        }
    }
    return ans;
};