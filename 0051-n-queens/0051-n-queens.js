/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let arr=Array(n).fill(null).map(() => Array(n).fill("."));
    let count=0;
    let ans=[];
    function func(i){
        if(i>=n){
            ans.push(arr.map(x=>x.join("")));
            return;
        }
        for(let j=0;j<n;j++){
            arr[i][j]="Q";
            if(check(i,j)){
                func(i+1);
                console.log(arr);
            }
            arr[i][j]=".";
        }
    }

    function check(i,j){
        let q=i;
        let w=j;
        while(q<n&&w<n){
            if(q==i&&w==j){
                q++;
                w++;
                continue;
            }
            if(arr[q][w]=="Q"){
                return false;
            }
            q++;
            w++;
        }
        q=i;
        w=j;
        while(q>-1&&w>-1){
            if(q==i&&w==j){
                q--;
                w--;
                continue;
            }
            if(arr[q][w]=="Q"){
                return false;
            }
            q--;
            w--;
        }
        q=i;
        w=j;
        while(q<n&&w>-1){
            if(q==i&&w==j){
                q++;
                w--;
                continue;
            }
            if(arr[q][w]=="Q"){
                return false;
            }
            q++;
            w--;
        }
        q=i;
        w=j;
        while(q>-1&&w<n){
            if(q==i&&w==j){
                q--;
                w++;
                continue;
            }
            if(arr[q][w]=="Q"){
                return false;
            }
            q--;
            w++;
        }
        q=0;
        while(q<n){
            if(q!=i&&arr[q][j]=="Q"){
                return false;
            }
            if(q!=j&&arr[i][q]=="Q"){
                return false;
            }
            q++;
        }
        return true;
    }
    func(0);
    // console.log(ans);
    return ans;
};