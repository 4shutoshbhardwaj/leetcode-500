/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    let arr2=s2.split("");
    let arr1=s1.split("");
    let i=0;
    let j=i+2;
    while(j<arr2.length){
        if(arr2[i]==s1[j]&&arr2[j]==s1[i]){
            let temp=arr2[i];
            arr2[i]=arr2[j];
            arr2[j]=temp;
            i++;
            j++;
        }else{
            i++;
            j++;
        }
    }
    s=arr2.join("");
    i=0;
    let t=true;
    while(t&&i<s.length){
        if(s[i]!=s1[i]){
            t=!t;
        }
        i++;
    }
    return t;
};