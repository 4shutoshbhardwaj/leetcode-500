/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    function func(i,j){
        if(i>=9){
            return true;
        }
        if(j>=9){
            return func(i+1,0);
        }
        if(board[i][j]!="."){
            return func(i,j+1);
        }
        for(let q=1;q<10;q++){
            if(available(i,j,q)){
                board[i][j]=""+q;
                if(func(i,j+1)){
                    return true;
                }
                board[i][j]="."
            }
        }
        return false;
    }

    function available(i,j,q){
        for(let w=0;w<9;w++){
            if(j!=w&&board[i][w]==(""+q)){
                return false;
            }
            if(i!=w&&board[w][j]==(""+q)){
                return false;
            }
        }
        let o=Math.floor(i/3)*3;
        let p=Math.floor(j/3)*3;
        for(let z=o;z<(o+3);z++){
            for(let x=p;x<(p+3);x++){
                if((i!=z&&j!=x)&&board[z][x]==(""+q)){
                    return false;
                }
            }
        }
        return true;
    }

    func(0,0);
};