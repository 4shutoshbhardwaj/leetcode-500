/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let i=0;
    let arr=[];
    let obj={};
    candidates.sort((a,b)=>a-b);
    function func(i,sum,subArr){
        if(sum==target){
            subArr.sort((a,b)=>a-b);
            let s=subArr.join("");
            if(obj[s]==undefined){
                arr.push([...subArr]);
                obj[s]=1;
            }
            return;
        }
        if(sum>target)return;
        if(i>=candidates.length)return;
        for(let j=i;j<candidates.length;j++){
            if(j>i&&candidates[j-1]==candidates[j])continue;
            if(sum+candidates[j]>target)break;
            sum+=candidates[j];
            subArr.push(candidates[j]);
            func(j+1,sum,subArr);
            sum-=candidates[j];
            subArr.pop();
        }
    }
    func(0,0,[]);
    return arr;
};