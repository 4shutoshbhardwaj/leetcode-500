/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    let obj={};
    let zeros=0;
    let unique=0;
    if(changed.length%2==1)return [];
    for(let i=0;i<changed.length;i++){
        if(changed[i]==0)zeros++;
        if(obj[changed[i]]==undefined){
            obj[changed[i]]=1;
            if(changed[i]!=0)unique++;
        }else{
            obj[changed[i]]++;
        }
    }
    if(zeros+unique<Math.floor(changed.length/2))return [];
    let arr=[];
    changed.sort((a,b)=>a-b);
    for(let i=0;i<changed.length;i++){
        let n=changed[i]*2;
        if(obj[n]!=undefined&&arr.length<Math.floor(changed.length/2)&&obj[changed[i]]!=undefined){
            if(changed[i]==0&&obj[n]<2)continue;
            arr.push(changed[i]);
            obj[n]--;
            obj[changed[i]]--;
            if(obj[n]==0)delete obj[n];
            if(obj[changed[i]]==0)delete obj[changed[i]];
        }
        // console.log(arr);
    }
    if(arr.length<Math.floor(changed.length/2))return [];
    return arr;
};