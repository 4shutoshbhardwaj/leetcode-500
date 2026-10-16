/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort();
    let res=[];
    let str="";
    for(let k=0;k<searchWord.length;k++){
        str+=searchWord[k];
        let i=0;
        let j=products.length-1;
        while(i<j){
            let m=i+Math.floor((j-i)/2);
            if(products[m]<str){
                i=m+1;
            }else{
                j=m;
            }
        }
        // console.log(str,idx,products);
        let ar=[];
        for(let x=i;x<Math.min(i+3,products.length);x++){
            if(products[x].startsWith(str)){
                ar.push(products[x]);
            }else{
                break;
            }
        }
        res.push(ar);
    }
    // console.log(res);
    return res;
};