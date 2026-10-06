/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let prev=s[0];
    let i=0;
    let count=0;
    let j=0;
    while(i<s.length){
        let obj={0:0,1:0};
        while(s[i]==prev&&i<s.length){
            obj[s[i]]++;
            i++;
            // console.log(i,"----1");
        }
        j=i;
        prev=s[i];
        while(s[i]==prev&&i<s.length){
            obj[s[i]]++;
            i++;
            // console.log(i,"----2");
        }
        if(obj[0]==obj[1]){
            count+=obj[1]
        }else if(obj[0]<obj[1]){
            count+=obj[0]
        }else if(obj[0]>obj[1]){
            count+=obj[1]
        }
        i=j;
    }
    return count;
};