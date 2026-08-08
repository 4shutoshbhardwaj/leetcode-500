/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    function func(i){
        if(i==board.length)return false;
        for(let j=0;j<board[i].length;j++){
            if(board[i][j]==word[0]){
                if(checking(i,j,0))return true;
            }
        }
        return func(i+1);
    }

    function checking(i,j,k){
        if(k+1==word.length)return true;
        let temp=board[i][j];
        board[i][j]="#";
        if(board[i-1]&&board[i-1][j]==word[k+1]){
            if(checking(i-1,j,k+1)){
                board[i][j]=temp;
                return true;
            }
        }
        if(board[i][j+1]!=undefined&&board[i][j+1]==word[k+1]){
            if(checking(i,j+1,k+1)){
                board[i][j]=temp;
                return true;
            }
        }
        if(board[i+1]&&board[i+1][j]==word[k+1]){
            if(checking(i+1,j,k+1)){
                board[i][j]=temp;
                return true;
            }
        }
        if(board[i][j-1]!=undefined&&board[i][j-1]==word[k+1]){
            if(checking(i,j-1,k+1)){
                board[i][j]=temp;
                return true;
            }
        }
        board[i][j]=temp;
        return false;
    }

    return func(0);
};