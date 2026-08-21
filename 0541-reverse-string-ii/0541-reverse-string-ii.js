/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if(s.length<=k)return s.split('').reverse().join('');
    let t=false;
    let j=k-1;
    let z=-1;
    for(let i=0;i<s.length;i++){
        if(i==j){
            if(!t){
                s=reverse(i);
                t=!t
            }else{
                t=!t;
                z=i;
            }
            j+=k;
        }
    }
    if(!t){
        let arr=s.split("");
        let str=arr.splice(z+1).reverse();
        arr=[...arr,...str];
        s=arr.join("");
    }
    return s;

    function reverse(j){
        let arr=s.split("");
        let i=j-k+1;
        while(i<j){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            i++;
            j--;
        }
        return arr.join("");
    }
};