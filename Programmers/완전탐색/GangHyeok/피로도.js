//DFS

function solution(k, dungeons) {
  var answer = [0, 0]; //answer 내부의 값 변경위해서 배열로 전달, 0번은 테스트용, 1번은 정답용(Max)만 저장
  
  DFS(k, dungeons, answer);
  
  return answer[1];
}

function DFS(k, dungeons, answer){//던전 돌기 전 체력, 던전들, count;
  for(let i of dungeons){
      if(k < i[0]){//최소 체력보다 작을 때는 continue해서 다른 던전 선택
          continue;
      }else{
          k-=i[1];
          answer[0]++;
          answer[1] = answer[0]>answer[1]?answer[0]:answer[1]; //answer[1]은 최대 던전 수 저장하는 곳, answer[0]으로 테스트된 수가 더 크면 큰 거 줌.
          
          DFS(k, dungeons.filter((x, idx, arr) => idx != arr.indexOf(i)), answer)
          answer[0]--;
          k+=i[1];
      }
      
  }
} 
