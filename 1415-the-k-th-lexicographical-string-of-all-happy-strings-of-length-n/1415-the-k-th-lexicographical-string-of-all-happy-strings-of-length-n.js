/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    let arr=["a","b","c"];
    let result=[];
    function func(n,s,j){
        if(n==0){
            result.push(s);
            return;
        }
        for(let i=0;i<arr.length;i++){
            if(i!=j){
                s+=arr[i];
                func(n-1,s,i);
                s=s.slice(0,s.length-1);
            }
        }
    }
    func(n,"",-1);
    // console.log(result);
    return result[k-1]?result[k-1]:"";
};