function solution(board) {
  var bombs = [];
  
  let bx = [1, 1, 1, 0, -1, -1, -1, 0];
  let by = [-1, 0, 1, 1, 1, 0, -1, -1];
 
  //폭탄 좌표 찾기
  board.forEach((x, idx, arr) => {
      x.forEach(((y, idy, x_axis) =>{
          if (y==1){
              bombs.push([idx, idy])
              arr[idx][idy] = 0;
          }
          else{
              arr[idx][idy] = 1;
          }
      }))
  });
  
  
  bombs.forEach(([x, y]) => {
      for(let i=0;i<8;i++){
          let dx=0, dy=0;
          if((x+bx[i])>=0&&(x+bx[i])<board.length) dx=x+bx[i]
          else continue;
          
          if((y+by[i])>=0&&(y+by[i])<board.length) dy=y+by[i]
          else continue;
          
          
          board[dx][dy] = 0;
      }
  })
      
  return board.reduce((prev, curr, idx, arr)=>{
      return prev + curr.reduce((a,b)=>a+b)
  }, 0)    
  
  
}