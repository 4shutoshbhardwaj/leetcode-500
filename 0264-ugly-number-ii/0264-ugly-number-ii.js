/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let arr=[1];
    let i2=0,i3=0,i5=0;
    while(arr.length<n){
        let a=arr[i2]*2;
        let b=arr[i3]*3;
        let c=arr[i5]*5;
        let min=Math.min(a,b,c)
        if(a==min)i2++;
        if(b==min)i3++;
        if(c==min)i5++;
        arr.push(min);
    }
    // console.log(arr);
    return arr[n-1];
};