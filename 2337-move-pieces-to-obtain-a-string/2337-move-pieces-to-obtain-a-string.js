/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
    let ar1=[],ar2=[];
    for(let i=0;i<start.length;i++){
        if(start[i]!="_"){
            ar1.push([start[i],i]);
        }
        if(target[i]!="_"){
            ar2.push([target[i],i]);
        }
    }
    console.log(ar1,ar1.length,"\n",ar2,ar2.length);
    if(ar1.length!=ar2.length)return false;
    if(ar1.length==ar2.length&&ar1.length==0)return true;
    let t=false;
    for(let i=0;i<ar1.length;i++){
        if((ar1[i][0]=="L"&&ar2[i][0]=="L"&&ar1[i][1]>=ar2[i][1])||(ar1[i][0]=="R"&&ar2[i][0]=="R"&&ar1[i][1]<=ar2[i][1])){
            t=true;
        }else{
            return false;
        }
    }
    return t;
};