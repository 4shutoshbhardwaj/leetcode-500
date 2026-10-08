/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
    let max=0;
    for(let i=0;i<s.length;i++){
        let obj={};
        let j=0;
        let k=0;
        while(k<=i){
            if(obj[s[k]]==undefined){
                obj[s[k]]=1;
            }else{
                obj[s[k]]++;
            }
            k++;
        }
        let n=-1;
        let t=true;
        let sum=0;
        for(let o in obj){
            if(n==-1){
                n=obj[o];
            }
            if(n!=obj[o]){
                t=false
            }
            sum+=obj[o];
        }
        if(t){
            max=Math.max(max,sum);
        }
        while(k<s.length){
            if(obj[s[k]]==undefined){
                obj[s[k]]=1;
            }else{
                obj[s[k]]++;
            }
            k++;
            obj[s[j]]--;
            if(obj[s[j]]==0)delete obj[s[j]];
            j++;
            let n=-1;
            let t=true;
            let sum=0;
            for(let o in obj){
                if(n==-1){
                    n=obj[o];
                }
                if(n!=obj[o]){
                    t=false
                }
                sum+=obj[o];
            }
            if(t){
                max=Math.max(max,sum);
            }
        }
    }
    return max;
};