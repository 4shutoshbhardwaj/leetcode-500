/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let ans=nums.length;
    for(let i=1;i<nums.length;i++){
        let count=0;
        let obj={};
        let j=0,k=0;
        while(k<nums.length){
            if(k<=i){
                if(obj[nums[k]]==undefined){
                    obj[nums[k]]=1;
                    count++;
                }else{
                    obj[nums[k]]++;
                }
                if(k==i)ans+=Math.pow(count,2);
                k++;
            }else{
                obj[nums[j]]--;
                if(obj[nums[j]]==0){
                    count--;
                    delete obj[nums[j]];
                }
                j++;
                if(obj[nums[k]]==undefined){
                    obj[nums[k]]=1;
                    count++;
                }else{
                    obj[nums[k]]++;
                }
                k++;
                ans+=Math.pow(count,2);
            }
            // console.log(obj,count,ans,j,k);
        }
    }
    // ans+=Math.pow(count,2);
    // console.log(ans);
    return ans;
};