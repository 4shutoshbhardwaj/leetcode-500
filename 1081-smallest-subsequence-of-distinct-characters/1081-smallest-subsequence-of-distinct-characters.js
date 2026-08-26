/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    let arr=[];
    let obj={};
    let count=0;
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]==undefined){
            obj[s[i]]=1;
            count++;
        }else{
            obj[s[i]]++;
        }
    }
    let stackObj={};
    for(let i=0;i<s.length;i++){
        // console.log(obj,stackObj,arr,s[i])
        if(arr[arr.length-1]>s[i]){
            while(arr.length>0&&arr[arr.length-1]>s[i]&&obj[arr[arr.length-1]]>0&&stackObj[s[i]]==undefined){
                let x=arr.pop();
                stackObj[x]--;
                if(stackObj[x]==0){
                    delete stackObj[x];
                }
            }
            if(stackObj[s[i]]==undefined){
                stackObj[s[i]]=1;
                arr.push(s[i]);
            }
            obj[s[i]]--;
        }else{
            if(stackObj[s[i]]==undefined){
                stackObj[s[i]]=1;
                arr.push(s[i]);
            }
            obj[s[i]]--;
        }
    }
    return arr.join("");
};