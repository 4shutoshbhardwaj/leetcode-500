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
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let ans;
    function func(node){
        if(!node)return;
        if(node.val>p.val){
            ans=node;
            func(node.left);
        }else if(node.val<p.val){
            func(node.right);
        }else{
            let temp=node.right;
            while(temp){
                ans=temp;
                temp=temp.left;
            }
        }
    }
    func(root);
    console.log(ans);
    return ans;
};