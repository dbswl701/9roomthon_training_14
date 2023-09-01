function solution(n) {
  var answer = 0;
  const Ftr = (i) => {  
      let result = 1;
          for(let v = 1; v <= i; v++) {
              result *= v;
          } //Ftr은 팩토리얼을 구하는 방식 
      return result;
  }
  
  for(let i = 1; ; i++) {
      const result = Ftr(i);
      if(n < result) {
          return i - 1
      }
  }
}