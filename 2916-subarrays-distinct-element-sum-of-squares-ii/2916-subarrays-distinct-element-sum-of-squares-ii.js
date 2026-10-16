/**
 * @param {number[]} nums
 * @return {number}
 */

var sumCounts = function(nums) {
    let n=nums.length;
    let mod=1000000007;
    let sum=Array(4*n).fill(0);
    let sq=Array(4*n).fill(0);
    let lazy=Array(4*n).fill(0);
    let last={};
    let ans=0;

    function apply(node,l,r,val){
        let len=r-l+1;

        sq[node]=(sq[node]+2*val*sum[node]+val*val*len)%mod;
        sum[node]=(sum[node]+val*len)%mod;
        lazy[node]+=val;
    }

    function push(node,l,r){
        if(lazy[node]==0 || l==r)return;

        let m=Math.floor((l+r)/2);

        apply(node*2,l,m,lazy[node]);
        apply(node*2+1,m+1,r,lazy[node]);

        lazy[node]=0;
    }

    function update(node,l,r,ql,qr){
        if(r<ql || l>qr)return;

        if(ql<=l && r<=qr){
            apply(node,l,r,1);
            return;
        }

        push(node,l,r);

        let m=Math.floor((l+r)/2);

        update(node*2,l,m,ql,qr);
        update(node*2+1,m+1,r,ql,qr);

        sum[node]=(sum[node*2]+sum[node*2+1])%mod;
        sq[node]=(sq[node*2]+sq[node*2+1])%mod;
    }

    for(let i=0;i<n;i++){
        let prev=last[nums[i]]===undefined?-1:last[nums[i]];

        update(1,0,n-1,prev+1,i);

        last[nums[i]]=i;

        ans=(ans+sq[1])%mod;
    }

    return ans;
};
