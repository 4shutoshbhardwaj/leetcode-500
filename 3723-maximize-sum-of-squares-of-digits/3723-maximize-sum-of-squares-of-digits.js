/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
    let arr=[];
    function func(sum,num){
        if(sum<=0)return;
        for(let i=9;i>=0;i--){
            if((sum-i)>=0&&num>0){
                arr.push(i);
                num--;
                sum=sum-i;
                return func(sum,num);
            }
        }
    }
    func(sum,num);
    let add=0;
    let str="";
    for(let i=0;i<arr.length;i++){
        add+=arr[i];
        str+=arr[i];
    }
    if(add!=sum)return "";
    while(num>str.length){
        str+="0";
    }
    return str;
};