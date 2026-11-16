/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let arr=new Array(n).fill(1);
    for(let i=2;i<arr.length;i++){
        if(arr[i]==1){
            let num=i;
            while(num<n){
                num+=i;
                arr[num]?arr[num]=num:null;
            }
        }
    }
    let count=0;
    for(let i=2;i<arr.length;i++){
        if(arr[i]==1){
            count++;
        }
    }
    return count;
};