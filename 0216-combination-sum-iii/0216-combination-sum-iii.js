/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let arr=[];
    function func(i,sum,subArr){
        if(sum==n&&subArr.length==k){
            arr.push([...subArr]);
            return;
        }
        if(sum>n)return;
        if(subArr.length>=k)return;
        for(let j=i;j<=9;j++){
            if(sum+j>n)break;
            subArr.push(j);
            sum+=j;
            func(j+1,sum,subArr);
            sum-=j;
            subArr.pop();
        }
    }
    func(1,0,[]);
    return arr;
};