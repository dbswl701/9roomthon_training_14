function solution(board) {
    const n = board.length;
    let safeAreaCount = 0;
  
    const directions = [
      [-1, 0], [1, 0], [0, -1], [0, 1],
      [-1, -1], [-1, 1], [1, -1], [1, 1]
    ];
  
    function isValid(row, col) {
      return row >= 0 && row < n && col >= 0 && col < n;
    }
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 0) {
          let isSafe = true;
  
          for (const [dr, dc] of directions) {
            const newRow = i + dr;
            const newCol = j + dc;
  
            if (isValid(newRow, newCol) && board[newRow][newCol] === 1) {
              isSafe = false;
              break;
            }
          }
  
          if (isSafe) {
            safeAreaCount++;
          }
        }
      }
    }
  
    return safeAreaCount;
  }