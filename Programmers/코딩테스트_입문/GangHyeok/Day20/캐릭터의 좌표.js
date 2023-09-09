function solution(keyinput, board) {
  var answer = [];
  
  let dx = 0, dy = 0;
  
  keyinput.forEach((v, idx, arr) =>{
      switch (v){
          case 'left':
              dx-1>=parseInt(board[0]/2)*(-1)?dx--:dx;
              break;
          case 'right':
              dx+1<=parseInt(board[0]/2)?dx++:dx;
              break;
          case 'up':
              dy+1<=parseInt(board[1]/2)?dy++:dy;
              break;
          case 'down':
              dy-1>=parseInt(board[1]/2)*(-1)?dy--:dy;
              break;
      }
  })
  
  return [dx, dy];
}