function solution(array) {
  let soltedArray = array.sort((a,b) => a-b);       var answer = 0;
  let cnt = 0;
  
  let choi = -1; //최빈값이 뭔지
  let choiRepeatCnt =0; //최빈값이 될때 몇번 반복되서 된건지.
  let repeatCnt = 0; // 현재 똑같은 숫자가 몇번 등장 했는지
  let beforeNumber = 0; // 지금 보고 있는 숫자, 이전 숫자
  let isDupChoi = false;
  while(cnt < array.length) {
      if(beforeNumber !== array[cnt]) {
          repeatCnt = 1;
      } else {
          repeatCnt = repeatCnt + 1;
      }
      
      if(repeatCnt === choiRepeatCnt) {
          if(choi !== array[cnt]) {
              isDupChoi = true;    
          }
           
      }
      
      if(repeatCnt > choiRepeatCnt) {
          choi = array[cnt];
          choiRepeatCnt = repeatCnt;
          isDupChoi = false;
      }
      
      beforeNumber = array[cnt];
      cnt = cnt+1;
  }

  if(isDupChoi) return -1;
  return choi;
}