function solution(num, k) {
    
  let StrNum = String(num);
  for ( let i = 0; i <StrNum.length; i++) {
      const item = StrNum[i];
      if ( item === String(k) ) {
          return i+1;
  }

  }
  return -1;
}