/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let objs={};
    for(var i=0;i<s.length;i++){
        let char=s[i];
        if(objs[char]===undefined){
            objs[char]=1;
        }else{
            objs[char]++;
        }
    }
    for(var i=0;i<t.length;i++){
        let char=t[i];
        if(objs[char]===undefined||objs[char]<=0){
            return false;
        }else{
            objs[char]--;
        }
    }
    for(ob in objs){
        if(objs[ob]!==0)return false;
    }
    return true;
};