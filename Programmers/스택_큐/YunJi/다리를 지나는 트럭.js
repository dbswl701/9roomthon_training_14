function solution(bridge_length, weight, truck_weights) {
  var answer = 1;
  
  const init = truck_weights.shift()
  let sum = init; // 현재 다리에 올라간 트럭들의 무게
  const queue = [{location: 0, weight: init}]; // 해당 트럭 위치, 무게
  
  while(queue.length > 0) {
      answer++;
      
      // 다리 위의 트럭들 앞으로 한칸씩 이동
      queue.map(v => v.location++);

      // 다리 맨 마지막에 있는 트럭 내보내기 -> sum 에서도 삭제
      if(queue[0].location === bridge_length) {
          sum -= queue[0].weight;
          queue.shift();
      }

      // 트럭 있는지 확인
      if (truck_weights.length === 0) continue;
      
      // 다음 순서로 다리에 들어올 트럭의 무게를 확인하여 현재 올라와있는 트럭들의 무게와 합쳤을 때 최대 무게 넘는지확인
      if(truck_weights[0] + sum > weight) continue;
  
      // 무게 안넘으면 다리 위로 올라옴 -> sum에 합해주고, queue에 객체로 무게, 위치 저장
      const nextTruck = truck_weights.shift();   
      sum += nextTruck;
      queue.push({location: 0, weight: nextTruck})
  }
  return answer;
}