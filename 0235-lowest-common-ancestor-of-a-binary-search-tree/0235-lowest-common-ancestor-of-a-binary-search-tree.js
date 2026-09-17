/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ar=[];
    function func(node,z){
        if(!node)return;
        if(node.val>z.val){
            ar.push(node);
            func(node.left,z);
        }else if(node.val<z.val){
            ar.push(node);
            func(node.right,z);
        }else{
            ar.push(node);
            return;
        }
    }
    func(root,p);
    let ar1=[...ar];
    ar=[];
    func(root,q);
    let ar2=[...ar];
    let ans;
    for(let i=ar1.length-1;i>=0;i--){
        let t=false;
        for(let j=ar2.length-1;j>=0;j--){
            if(ar1[i].val==ar2[j].val){
                ans=ar1[i];
                t=true;
                break;
            }
        }
        if(t)break;
    }
    return ans;
};