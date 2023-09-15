function solution(board) {
  let answer = 0;
  const newBoard = [];
  
  // 2차원배열 - 깊은복사
  board.forEach((v, idx) => {
      newBoard[idx] = [...v]
  })
  for(let i=0; i<board.length; i++) {
      for(let j=0; j<board.length; j++) {
          if (board[i][j] == 1) {
              if (0 <= i-1 && 0<= j-1) newBoard[i-1][j-1] = 1;
              if (0 <= i-1) newBoard[i-1][j] = 1;
              if (0 <= j-1) newBoard[i][j-1] = 1;
              if (i+1 < board.length) newBoard[i+1][j] = 1;
              if (j+1 < board.length) newBoard[i][j+1] = 1;
              if (i+1 < board.length && j+1 < board.length) newBoard[i+1][j+1] = 1;
              if (0 <= i-1 && j+1 < board.length) newBoard[i-1][j+1] = 1;
              if (0 <= j-1 && i+1 < board.length) newBoard[i+1][j-1] = 1;
          }
      }
  }

  for(let i=0; i<board.length; i++) {
      for(let j=0; j<board.length; j++) {
          if(newBoard[i][j] === 0) answer++;       
      }
  }
  
  return answer;
}