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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    let parent={};
    let target;
    function func(node){
        let q=[node];
        let i=0;
        while(i<q.length){
            if(q[i].val==start){
                target=q[i];
            }
            if(q[i].left){
                q.push(q[i].left);
                parent[q[i].left.val]=q[i];
            }
            if(q[i].right){
                q.push(q[i].right);
                parent[q[i].right.val]=q[i];
            }
            i++;
        }
    }
    func(root);
    let q=[target];
    let obj={};
    obj[target.val]=true;
    i=0;
    let dist=0;
    while(q.length>0){
        let n=q.length;
        for(let i=0;i<n;i++){
            let node=q[i];
            if(node.left&&!obj[node.left.val]){
                obj[node.left.val]=true;
                q.push(node.left);
            }
            if(node.right&&!obj[node.right.val]){
                obj[node.right.val]=true;
                q.push(node.right);
            }
            if(parent[node.val]&&!obj[parent[node.val].val]){
                obj[parent[node.val].val]=true;
                q.push(parent[node.val]);
            }
        }
        dist++;
        q=q.slice(n);
    }
    return dist-1;
};