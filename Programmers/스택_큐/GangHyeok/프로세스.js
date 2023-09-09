function solution(priorities, location) {
  var max = Math.max(...priorities);
  var done = 0, l = location;
  
  for(let i = 0;i<priorities.length && i != l+1;i++){
      if(priorities[i] >= max){
          priorities[i] = 0;
          max=Math.max(...priorities);
          done++;
      }else{
          priorities[priorities.length] = priorities[i];
          priorities[i] = 0;
          if(i == l){
              l = priorities.length-1;
          }
      }
      console.log(done,':',priorities, l);
  }
  
  
  return done;
}