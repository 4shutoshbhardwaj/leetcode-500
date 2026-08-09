/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let arr=new Array(n).fill(1);
    for(let i=2;i<arr.length;i++){
        if(arr[i]==1){
            let sum=i+i;
            for(let j=sum;j<n;j+=i){
                arr[j]=0;
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