/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    var beauty=0;
    for(var i=0;i<s.length;i++){
        var freq=new Array(26).fill(0);
        for(var j=i;j<s.length;j++){
            var idx=s.charCodeAt(j)-97;
            freq[idx]++;
            var min=Infinity;
            var max=0;
            for(var k=0;k<freq.length;k++){
                if(freq[k]>0){
                    min=Math.min(min,freq[k]);
                    max=Math.max(max,freq[k]);
                }
            }
            beauty+=(max-min);
        }
    }
    return beauty;
};