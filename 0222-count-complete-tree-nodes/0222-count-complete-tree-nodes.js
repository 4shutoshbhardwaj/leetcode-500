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
var countNodes = function(root) {
    if(!root)return 0;
    let l=root;
    let r=root;
    let countl=0;
    let countr=0;
    while(l){
        l=l.left;
        countl++;
    }
    while(r){
        r=r.right;
        countr++;
    }
    if(countl==countr){
        let ans=1;
        for(let i=0;i<countl;i++){
            ans=ans*2;
        }
        return ans-1;
    }
    return 1+countNodes(root.left)+countNodes(root.right);
};