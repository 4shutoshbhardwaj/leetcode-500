/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    let arr=[];
    for(let i=0;i<nums.length;i++){
        let s=nums[i]+"";
        let sum=0;
        for(let j=0;j<s.length;j++){
            sum+=(+s[j]);
        }
        arr.push([sum,nums[i],i]);
    }
    arr.sort((a,b)=>a[0]-b[0]||a[1]-b[1]);
    let visited=Array(nums.length).fill(false);
    let count=0;
    // console.log(arr,visited);
    for(let i=0;i<arr.length;i++){
        if(visited[i]||arr[i][2]==i)continue;
        let len=0;
        let j=i;
        while(!visited[j]){
            visited[j]=true;
            j=arr[j][2];
            len++;
        }
        count+=(len-1);
    }
    return count;
};