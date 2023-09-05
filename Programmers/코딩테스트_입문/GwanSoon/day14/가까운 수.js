function solution(array, n) {
  let answer = '';
  let minAbs = 100;
  
  const sortedArray = array.sort((a,b) => a - b);
  
      for (i = 0; i < array.length; i++) {
          const item = array[i]
              if(minAbs > Math.abs(n - item)) {
                  minAbs = Math.abs(n - item);
                  answer = item;
              }
      }
  
  return answer
}