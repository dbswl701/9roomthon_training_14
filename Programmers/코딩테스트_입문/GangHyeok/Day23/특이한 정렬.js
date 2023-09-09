function solution(numlist, n) {
  var diff = [], answer = [];
  numlist.sort((a,b)=>a-b);
  diff = numlist.map(x => Math.abs(x-n));
  let start = diff.indexOf(diff.slice().sort((a,b)=>a-b)[0]);
  
  console.log(start, diff);
  
  for(let i=start, j = start-1;i<numlist.length||j>=0;){
      if(j<0){
          answer.push(numlist[i++]);
          continue;
      }
      if(i>=numlist.length){
          answer.push(numlist[j--]);
          continue;
      }
      if(i>numlist.length&&j<0){
          break;
      }
      
      if(diff[i]<diff[j]){
          answer.push(numlist[i++]);
      }
      else if(diff[i]==diff[j]){
          answer.push(numlist[i++])
          answer.push(numlist[j--])
      }
      else{
          answer.push(numlist[j--])
      }
  }
  
  return answer;
}