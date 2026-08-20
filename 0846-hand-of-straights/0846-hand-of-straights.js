/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if(hand.length%groupSize!=0)return false;
    let obj={};
    let objNode=0
    for(let i=0;i<hand.length;i++){
        if(obj[hand[i]]==undefined){
            obj[hand[i]]=1;
            objNode++;
        }else{
            obj[hand[i]]++;
        }
    }
    while(objNode>0){
        let t=false;
        let c=0;
        let group=0;
        for(let i in obj){
            // console.log(i,obj)
            if(!t){
                c=i;
                t=true;
            }
            if(obj[c]==undefined){
                return false;
            }
            obj[c]--;
            if(obj[c]==0){
                delete obj[c];
                objNode--;
            }
            group++;
            if(group==groupSize)break;
            c++;
        }
        if(group!=groupSize)return false;
    }
    return true;
};