/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function(nums, queries) {
    let map={};
    let pos=Array(nums.length);

    for(let i=0;i<nums.length;i++){
        if(!map[nums[i]])map[nums[i]]=[];
        pos[i]=map[nums[i]].length;
        map[nums[i]].push(i);
    }

    let res=[];

    for(let i=0;i<queries.length;i++){
        let index=queries[i];
        let arr=map[nums[index]];

        if(arr.length==1){
            res.push(-1);
            continue;
        }

        let p=pos[index];

        let prev=arr[(p-1+arr.length)%arr.length];
        let next=arr[(p+1)%arr.length];

        let d1=Math.abs(index-prev);
        let d2=Math.abs(index-next);

        d1=Math.min(d1,nums.length-d1);
        d2=Math.min(d2,nums.length-d2);

        res.push(Math.min(d1,d2));
    }

    return res;
};