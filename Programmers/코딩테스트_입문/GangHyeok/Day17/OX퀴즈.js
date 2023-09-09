function solution(quiz) {
  var answer = [];
  
 for(let x of quiz){
     let arr = x.split(' ');
      
      switch(arr[1]){
          case '+':
              answer.push((Number(arr[0])+Number(arr[2]))==Number(arr[4])?'O':'X');
              break;
          case '-':
              answer.push((Number(arr[0])-Number(arr[2]))==Number(arr[4])?'O':'X');
              break;
      }
      
  }
  
  return answer;
}