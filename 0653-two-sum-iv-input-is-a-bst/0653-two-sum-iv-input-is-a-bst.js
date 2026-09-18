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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let arrl=[];
    let temp=root;
    while(temp){
        arrl.push(temp);
        temp=temp.left;
    }
    let arrr=[];
    temp=root;
    while(temp){
        arrr.push(temp);
        temp=temp.right;
    }
    function funcl(){
        let ans=arrl.pop();
        let temp=ans.right;
        while(temp){
            arrl.push(temp);
            temp=temp.left;
        }
        return ans;
    }
    function funcr(){
        let ans=arrr.pop();
        temp=ans.left;
        while(temp){
            arrr.push(temp);
            temp=temp.right;
        }
        return ans;
    }
    let l=funcl().val;
    let r=funcr().val;
    while(l!=r){
        if(l+r==k){
            return true;
        }
        if(l+r>k){
            r=funcr().val;
        }else{
            l=funcl().val;
        }
    }
    return false;
};