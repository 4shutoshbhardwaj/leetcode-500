/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let obj={};
    let max=0;
    for(let i=0;i<tasks.length;i++){
        if(obj[tasks[i]]==undefined){
            obj[tasks[i]]=1;
        }else{
            obj[tasks[i]]++;
            max=Math.max(max,obj[tasks[i]]);
        }
    }
    let countMax=0;
    for(let i in obj){
        if(obj[i]==max){
            countMax++;
        }
    }
    let ans=(max-1)*(n+1)+countMax;
    return Math.max(ans,tasks.length);
};