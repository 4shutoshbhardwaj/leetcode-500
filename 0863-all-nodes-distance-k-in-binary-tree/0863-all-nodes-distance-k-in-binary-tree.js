/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    let parent={};
    function func(node){
        let q=[node];
        let i=0;
        while(i<q.length){
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
    // console.log(parent);
    let q=[target];
    let obj={};
    obj[target.val]=true;
    i=0;
    let dist=0;
    while(q.length>0){
        let n=q.length;
        if(dist==k){
            let result=[];
            for(let i=0;i<n;i++){
                result.push(q[i].val);
            }
            return result;
        }
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
    return [];
};