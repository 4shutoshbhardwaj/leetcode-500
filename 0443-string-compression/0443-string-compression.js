/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let prev=chars[0];
    let count=1;
    let s="";
    for(let i=1;i<chars.length;i++){
        let curr=chars[i];
        if(curr==prev){
            count++;
        }else{
            if(count>1){
                s+=prev+count;
            }else{
                s+=prev;
            }
            count=1;
        }
        prev=curr
    }
    if(count>1){
        s+=prev+count;
    }else{
        s+=prev;
    }
    while(chars.length>0)chars.pop();
    for(let i=0;i<s.length;i++){
        chars.push(s[i]);
    }
    // console.log(chars);
    // return chars.length;
};