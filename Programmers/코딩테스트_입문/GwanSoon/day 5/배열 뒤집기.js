
function solution(num_list) {
    
  const newArray = [];
  let cnt = num_list.length - 1; //왜냐하면 [0]부터 시작하기 때문.
  while(cnt >= 0) {
      newArray.push(num_list[cnt]);
      
      cnt = cnt - 1
  }
  return newArray;
}