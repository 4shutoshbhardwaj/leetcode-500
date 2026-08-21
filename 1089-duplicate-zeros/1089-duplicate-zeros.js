/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let count=0;
    let i=0;
    let ans=0;
    while(arr[i]!=undefined){
        if(arr[i]==0){
            count++;
        }else if(arr[i]!=0&&count>0){
            ans+=count;
            arr=doubleZeros(i,count);
            i+=count;
            count=0;
        }
        i++;
    }
    while(ans>0){
        arr.pop();
        ans--;
    }

    function doubleZeros(j,count){
        arr1=arr.splice(j);
        while(count>0){
            arr.push(0);
            count--;
        }
        arr.push(...arr1);
        return arr;
    }
};