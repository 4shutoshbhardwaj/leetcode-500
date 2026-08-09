/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(dividend==-2147483648&&divisor==-1){
        return 2147483647;
    }
    let sign=1;
    if((dividend<0&&divisor>0)||(dividend>0&&divisor<0)){
        sign=-1;
    }
    let a=Math.abs(dividend);
    let b=Math.abs(divisor);
    let ans=0;
    while(a>=b){
        let temp=b;
        let count=1;
        while(a>=temp+temp){
            temp+=temp;
            count+=count;
        }
        a-=temp;
        ans+=count;
    }
    return sign==-1?-ans:ans;
};