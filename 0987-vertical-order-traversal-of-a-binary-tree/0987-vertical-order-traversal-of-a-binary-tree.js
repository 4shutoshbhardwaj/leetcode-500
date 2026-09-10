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
var verticalTraversal = function(root) {
    let arr=[];
    function dfs(node,row,col){
        if(!node)return;
        arr.push([col,row,node.val]);
        dfs(node.left,row+1,col-1);
        dfs(node.right,row+1,col+1);
    }
    dfs(root,0,0);
    arr.sort((a,b)=>{
        if(a[0]!=b[0])return a[0]-b[0];
        if(a[1]!=b[1])return a[1]-b[1];
        return a[2]-b[2];
    });
    let result=[];
    let prev=null;
    for(let i=0;i<arr.length;i++){
        let col=arr[i][0];
        if(col!=prev){
            result.push([]);
            prev=col;
        }
        result[result.length-1].push(arr[i][2]);
    }
    return result;
};