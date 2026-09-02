/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    let map={};

    for(let i=0;i<indices.length;i++){
        if(s.slice(indices[i],indices[i]+sources[i].length)==sources[i]){
            map[indices[i]]=[sources[i],targets[i]];
        }
    }

    let ans="";

    for(let i=0;i<s.length;){
        if(map[i]){
            ans+=map[i][1];
            i+=map[i][0].length;
        }else{
            ans+=s[i];
            i++;
        }
    }

    return ans;
};