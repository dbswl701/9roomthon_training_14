function solution(s) {
  var answer = 0;
  
  answer = s.split(' ').reduce((prev, curr, idx, arr)=>{
      //문자열을 split 한거라 정수로 변환 필요
      prev = parseInt(prev);

      //curr이 Z이면 이전 index의 값에 -1 곱한 값 저장 아니면 그냥 정수화
      if(curr == 'Z'){
          curr = parseInt(arr[idx-1]) * -1;
      }
      else{
          curr = parseInt(curr);
      }
      console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
      return prev+curr
  })
 
  //배열에 원소가 한 개 있으면 리듀스 작동 안하고 문자열 그대로 반환 => 정수화 시켜주기
  return parseInt(answer);
}