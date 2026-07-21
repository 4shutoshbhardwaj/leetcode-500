/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var arr=[];
    var m=matrix.length
    var n=matrix[0].length;
    var a1=0;
    var a2=1;
    var obj={};
    while(m>0&&n>0){
        for(var i=a1;i<n;i++){
            var s=""+a1+i;
            if(obj[s]==undefined){
                arr.push(matrix[a1][i]);
                obj[s]=1
            }
        }
        for(var j=a2;j<m;j++){
            s=""+j+n-1;
            if(obj[s]==undefined){
                arr.push(matrix[j][n-1]);
                obj[s]=1
            }
        }
        for(var k=n-1-1;k>=a1;k--){
            s=""+m-1+""+k;
            if(obj[s]==undefined){
                arr.push(matrix[m-1][k]);
                obj[s]=1
            }
        }
        for(var l=m-1-1;l>a1;l--){
            s=""+l+a1;
            if(obj[s]==undefined){
                arr.push(matrix[l][a1]);
                obj[s]=1
            }
        }
        m--;
        n--;
        a1++;
        a2++;
    }
    return arr;
};