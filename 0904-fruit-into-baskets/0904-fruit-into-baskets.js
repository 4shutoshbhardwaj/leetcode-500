/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let i=0;
    let j=0;
    let obj={};
    let max=0;
    while(j<fruits.length){
        if(Object.keys(obj).length<2&&obj[fruits[j]]==undefined){
            obj[fruits[j]]=1;
            j++;
        }else if(Object.keys(obj).length<=2&&obj[fruits[j]]!=undefined){
            obj[fruits[j]]++;
            j++;
        }else if(Object.keys(obj).length==2&&obj[fruits[j]]==undefined&&obj[fruits[i]]>1){
            max=Math.max(max,j-i);
            obj[fruits[i]]--;
            i++;
        }else if(Object.keys(obj).length==2&&obj[fruits[j]]==undefined&&obj[fruits[i]]==1){
            delete obj[fruits[i]];
            i++;
            // max=Math.max(max,j-i);
        }
    }
    max=Math.max(max,j-i);
    // console.log(max);
    return max;
};