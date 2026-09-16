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
 * @param {number[]} queries
 * @return {number[][]}
 */
var closestNodes = function(root, queries) {
    let arr=[];
    function func(node){
        if(!node)return;
        if(node.left){
            func(node.left);
        }
        arr.push(node.val);
        if(node.right){
            func(node.right);
        }
    }
    func(root);
    let result=[];
    for(let i=0;i<queries.length;i++){
        let l=0;
        let r=arr.length-1;
        let ans=[-1,-1];
        while(l<=r){
            let mid=l+Math.floor((r-l)/2);
            if(arr[mid]==queries[i]){
                ans=[arr[mid],arr[mid]];
                break;
            }
            if(arr[mid]>queries[i]){
                ans[1]=arr[mid];
                r=mid-1;
            }else if(arr[mid]<queries[i]){
                ans[0]=arr[mid];
                l=mid+1;
            }
        }
        result.push(ans);
    }
    return result;
};