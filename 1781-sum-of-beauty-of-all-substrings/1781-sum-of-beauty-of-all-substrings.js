/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let count=0;
    for(let i=0;i<s.length;i++){
        let obj={};
        let freq=0;
        for(let j=i;j<s.length;j++){
            if(obj[s[j]]==undefined){
                obj[s[j]]=1;
                freq++;
            }else{
                obj[s[j]]++;
            }
            if(freq>1){
                // console.log(obj,freq);
                let max=0;
                let min=Infinity;
                for(let o in obj){
                    min=Math.min(obj[o],min);
                    max=Math.max(obj[o],max);
                }
                count+=(max-min);
            }
        }
    }
    return count;
};