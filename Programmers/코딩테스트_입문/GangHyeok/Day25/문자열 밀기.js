function solution(A, B) {

  if(A===B){
      return 0;
  }
  
  let answer = [0,0];
  let Acpy = A.split('')
  Acpy.unshift(Acpy.pop())
  answer[0]++;
  console.log(Acpy)
  
  while(Acpy.join('')!=A){
      if(Acpy.join('')==B){
          answer[1] = 1;
          break;
         }
      Acpy.unshift(Acpy.pop());
      answer[0]++;
  }
  
  console.log(answer)
  return answer[1]?answer[0]:-1;
  
//     let answer =[0,0];
//     let dif = B.lastIndexOf(A[0]);
//     console.log(dif);
  
  
//     A.forEach((x, idx)=>{
//         let didx = (idx+dif>=A.length)?idx+dif-A.length:idx+dif;
      
//         console.log(idx,':',x, didx,":",B[didx])
//         if(x != B[didx]){
//             answer[0] = -1;
//         }
//     })
  
//     if(answer[0]!=-1)  answer[0]=dif;
  
//     dif = B.indexOf(A[0])
  
//     A.forEach((x, idx)=>{
//         let didx = (idx+dif>=A.length)?idx+dif-A.length:idx+dif;
      
//         console.log(idx,':',x, didx,":",B[didx])
//         if(x != B[didx]){
//             answer[1] = -1;
//         }
//     })
  
//     if(answer[1]!=-1) answer[1]=dif;
  
//     console.log(answer)
  
//     if(answer[0]==-1) return answer[1]
//     else if(answer[1]==-1) return answer[0]
//     else return Math.min(...answer)
}