/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root)return "";
    let arr=[root];
    let s=""+root.val;
    for(let i=0;i<arr.length;i++){
        s+=",";
        if(arr[i].left){
            arr.push(arr[i].left);
            s+=arr[i].left.val;
        }else{
            s+="X";
        }
        s+=",";
        if(arr[i].right){
            arr.push(arr[i].right);
            s+=arr[i].right.val;
        }else{
            s+="X";
        }
    }
    // console.log(s);
    return s;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data=="")return null;
    // console.log(data,data[0]);
    let arr=data.split(",");
    let PrimaryNode=new TreeNode(+arr[0]);
    let q=[PrimaryNode];
    let j=1;
    for(let i=0;i<q.length;i++){
        // console.log(PrimaryNode,arr,j);
        if(arr[j]!="X"){
            q[i].left=new TreeNode(+arr[j++]);
            q.push(q[i].left);
        }else{
            j++;
        }
        if(arr[j]!="X"){
            q[i].right=new TreeNode(+arr[j++]);
            q.push(q[i].right);
        }else{
            j++;
        }
    }
    return PrimaryNode;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */