function solution(dots) {
  for(let i = 0;i<dots.length;i++){
      for(let j=i+1;j<dots.length;j++){
          let tmp = dots.filter((_,idx)=>idx!=i&&idx!=j);
          if((dots[i][1]-dots[j][1])/(dots[i][0] - dots[j][0]) == (tmp[0][1]-tmp[1][1])/(tmp[0][0] - tmp[1][0])){
              return 1;
          }
      }
  }
  
  return 0;
}