/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
    let count=0;
    for(let i=0;i<arr.length-2;i++){
        let obj={};
        for(let k=i+1;k<arr.length;k++){
            if(obj[arr[k]]==undefined){
                obj[arr[k]]=1;
            }else{
                obj[arr[k]]++;
            }
        }
        for(let j=i+1;j<arr.length-1;j++){
            obj[arr[j]]--;
            let rem=target-(arr[i]+arr[j]);
            if(obj[rem]!=undefined){
                count=(count+obj[rem])%1000000007;
            }
        }
    }
    return count;
};