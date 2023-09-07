function solution(numbers) {
  var answer = 0;
  
  numbers.sort((a,b)=>a-b);
  
  //음수 가장 작은 거면 왼쪽에, 양수 가장 큰 값은 오른쪽에 => 가장 작은 음수 곱 vs 가장 큰 양수 곱
  return Math.max(numbers[0]*numbers[1],numbers[numbers.length-1]*numbers[numbers.length-2]);
}