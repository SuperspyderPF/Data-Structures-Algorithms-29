var findWords = function(board, words) {
    let resp = false;
    let result = new Set();
    let row = board.length;
    let column = board[0].length;
    let word;
    
    const dfsBoard = (board, i, j, counter) => {
        if( i < 0 || j< 0 || i >= row || j >= column || board[i][j] != word[counter]) return;
        if(board[i][j] == word[counter]) {
            board[i][j] = '*';
            if(counter + 1 == word.length) {
                resp=true
                 board[i][j] = word[counter];
                return;
            } 
            dfsBoard(board, i+1, j, counter + 1);
            dfsBoard(board, i, j+1, counter + 1);
            dfsBoard(board, i-1, j, counter + 1);
            dfsBoard(board, i, j-1, counter + 1);
           board[i][j] = word[counter];
        }
    }
    for(let g=0; g<row; g++){
        for(let k=0; k<column; k++){
            for(let curWord of words){
                if(curWord[0] ===  board[g][k] && !result.has(curWord)) {
                     word = curWord;
                    dfsBoard( board, g, k, 0);
                } 
                if(resp) result.add(word);
                resp = false;
            }
        }
    }
    return Array.from(result);
};