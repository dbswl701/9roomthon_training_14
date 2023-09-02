function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  
  let affordable_group=[];
  
//     //같이 다닐 수 있는 트럭의 idx 표시 / i번째 트럭은 truck_weight[i]번째 트럭과 같이 갈 수 있음.
//     truck_weights.forEach((itm, idx)=>{
//         let tmp=0;
//         for(let i=idx;i<truck_weights.length;i++){
//             tmp+=truck_weights[i];
//             if(tmp<=weight){
//                 affordable_group[idx] = i
//             }
//         }
//     });
//     console.log(affordable_group);
  
//     for(let i=0;i<affordable_group.length;i++){
//         if(affordable_group[i] == i){
//             answer+=bridge_length;
//         }else{
//             answer+=1;
          
//         }
//         console.log(answer + ': '+i +': '+affordable_group[i]);
//     }
//     return answer+=1;
  let bridge= new Array(bridge_length+1).fill(0);
  //첫 번째 트럭 들어감
  let w=truck_weights[0];
  bridge[bridge_length] = w;
  answer++;
  let j=1;
  let i=1;
  let l=truck_weights.length;
  // console.log(answer + ': ' + bridge +' - ' + w,i, l, j);
  for(;i<l;){
      // console.log(bridge[j], w, w-bridge[j])
      w =w- bridge[j]; //다리 끝에 도달하면 그 무게만큼 빼기
      // console.log(w);
      j++;//그러고 한 칸 이동
      answer++;
      if(w+truck_weights[i]<=weight){ //새 트럭와도 무게가 버틸만할 때
          bridge[bridge.length] = truck_weights[i]; //트럭 추가
          i++;//한 칸 뒤로
          w += bridge[bridge.length-1];
      }
      else{
          bridge[bridge.length]=0;
          }
      // console.log(answer + ': ' + bridge +' - ' + w,i,l,j);
  }
  
  return answer+bridge_length;
}