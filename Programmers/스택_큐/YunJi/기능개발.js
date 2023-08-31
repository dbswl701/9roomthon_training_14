function solution(progresses, speeds) {
  let answer = []; 
  
  // 완료까지의 날짜 new_arr에 초기화
  let new_arr = progresses.map((v, idx) => Math.ceil((100 - v) / speeds[idx]));

  // 앞에거부터 빼면서, 뒤에것들이 앞에보다 작으면 같이 빼고, 아니라면 값 저장하고 다시 확인 시작
  let max_num = new_arr[0];
  let count = 1;
  
  while(new_arr.length != 0) {
      new_arr.shift();
      if (max_num >= new_arr[0]) count += 1;
      else {
          answer.push(count);
          max_num = new_arr[0];
          count = 1;
      }
  }
  
  return answer;
}