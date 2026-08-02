/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length!=goal.length)return false;
    let j=-1;
    let arr=[];
    for(let i=0;i<goal.length;i++){
        if(s.startsWith(goal.slice(i))){
            j=i;
            arr.push(i);
            // break;
        }
    }
    console.log(j);
    if(j==-1){
        return false;
    }
    for(let q in arr){
        j=s.length-arr[q];
        console.log(j);
        let z=0;
        let flag=true;
        while(j<s.length){
            if(goal[z]!==s[j]){
                flag=false;
            }
            j++;
            z++;
        }
        if(flag)return true;
    }
    return false;
};