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
 */
var BSTIterator = function(root) {
    this.arr=[];
    temp=root;
    while(temp){
        this.arr.push(temp);
        temp=temp.left;
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let ans=this.arr.pop();
    let temp=ans.right;
    while(temp){
        this.arr.push(temp);
        temp=temp.left;
    }
    return ans.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.arr.length>0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */