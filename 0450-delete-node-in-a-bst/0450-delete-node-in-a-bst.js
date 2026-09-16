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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    function func(node){
        if(!node)return null;
        if(node.val>key){
            node.left=func(node.left);
        }else if(node.val<key){
            node.right=func(node.right);
        }else{
            if(!node.left&&!node.right)return null;
            if(!node.left&&node.right)return node.right;
            if(!node.right&&node.left)return node.left;
            if(node.right&&node.left){
                let temp=node.left;
                while(temp.right){
                    temp=temp.right;
                }
                temp.right=node.right;
                // node.val=temp.val;
                return node.left
            }
        }
        return node;
    }
    return func(root);
    // console.log(root);
    // return root;
};