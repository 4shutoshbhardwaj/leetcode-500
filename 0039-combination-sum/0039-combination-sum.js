/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let i=0;
    let arr=[];
    let obj={};
    function func(i,sum,subArr){
        // console.log(i,sum,subArr);
        if(sum==target&&i<candidates.length){
            // console.log(subArr,"----------------------------",typeof subArr.join(""));
            // let s=subArr.join("");
            // if(obj[s]==undefined){
                arr.push([...subArr]);
                // obj[s]=1;
            // }
            return;
        }
        if(sum>target){
            return;
        }
        if(i>=candidates.length)return;
        sum+=candidates[i];
        subArr.push(candidates[i]);
        func(i,sum,subArr);
        // func(i+1,sum,subArr);
        sum-=candidates[i];
        subArr.pop();
        func(i+1,sum,subArr);
    }
    func(0,0,[]);
    // console.log(arr);
    return arr;
};