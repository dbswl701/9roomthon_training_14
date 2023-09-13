function solution(keyinput, board) {
  let width = 0, height = 0;
  
  for(item of keyinput) {
      if (item === 'left' && width > parseInt(-board[0]/2)) width--;
      if (item === 'right' && width < parseInt(board[0]/2)) width++;
      if (item === 'up' && height < parseInt(board[1]/2)) height++;
      if (item === 'down' && height > parseInt(-board[1]/2)) height--;
  }
  return [width, height];
}