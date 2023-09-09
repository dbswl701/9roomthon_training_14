function solution(progresses, speeds) {
  var answer = [];
  var done = [];
  
  for (var i =0;i<speeds.length;i++){
      var tmp = parseInt((100-progresses[i])/speeds[i]) + (((100-progresses[i])%speeds[i] > 0)?1:0);
      if(done[done.length-1] >= tmp){
          answer[answer.length-1]++;
      }
      else{
          done[done.length] = tmp;
          answer[answer.length] = 1;
      }
  }
  
  console.log(answer);
  console.log(done);
  
  
  return answer;
}