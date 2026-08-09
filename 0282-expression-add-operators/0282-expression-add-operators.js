/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    let arr=[];
    function func(i,sum,str,prev){
        if(i==num.length){
            if(sum==target){
                arr.push(str);
            }
            return;
        }
        for(let j=i;j<num.length;j++){
            if(j>i&&num[i]=="0")break;
            let s=num.substring(i,j+1);
            let n=Number(s);
            if(i==0){
                func(j+1,n,s,n);
            }else{
                func(j+1,sum+n,str+"+"+s,n);
                func(j+1,sum-n,str+"-"+s,-n);
                func(j+1,sum-prev+prev*n,str+"*"+s,prev*n);
            }
        }
    }
    func(0,0,"",0);
    return arr;
};