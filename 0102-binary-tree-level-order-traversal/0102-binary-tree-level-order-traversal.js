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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result=[];
    if(!root)return result;
    let q=[root];
    while(q.length>0){
        let arr=[];
        result.push([]);
        for(let i=0;i<q.length;i++){
            result[result.length-1].push(q[i].val);
            if(q[i].left){
                arr.push(q[i].left);
            }
            if(q[i].right){
                arr.push(q[i].right);
            }
        }
        q=arr;
    }
    return result;
};