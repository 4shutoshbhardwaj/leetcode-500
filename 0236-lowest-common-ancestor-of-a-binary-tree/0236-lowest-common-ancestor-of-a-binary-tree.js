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
    let result=[];
    function func(node,i,j,arr){
        if(!node)return;
        arr.push([i,j,node.val]);
        if(node.val==q.val||node.val==p.val){
            result.push([...arr]);
        }
        func(node.left,i-1,j+1,arr);
        func(node.right,i+1,j+1,arr);
        arr.pop();
    }
    func(root,0,0,[]);
    let [ar1,ar2]=result;
    let t=false;
    for(let i=ar1.length-1;i>=0;i--){
        for(let j=ar2.length-1;j>=0;j--){
            if(ar1[i][0]==ar2[j][0]&&ar1[i][1]==ar2[j][1]&&ar1[i][2]==ar2[j][2]){
                result=[ar1[i][0],ar1[i][1]];
                t=true;
            }
        }
        if(t)break;
    }
    function func1(node,i,j){
        if(!node)return;
        if(i==result[0]&&j==result[1]){
            result=node;
        }
        func1(node.left,i-1,j+1);
        func1(node.right,i+1,j+1);
    }
    func1(root,0,0);
    return result;
};