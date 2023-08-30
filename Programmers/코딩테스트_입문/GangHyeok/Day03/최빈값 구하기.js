function solution(array) {
  var answer = 0;
  
  let arr = [];
  let max = 0;
  

  
  for(let i of array){
      if(arr[i] == null){
          arr[i] = 1;
      }
      else{
          arr[i]++;    
      }
      
  }
  
  for(let i in arr){
      if(arr[i]){
          if(arr[i] > max){
          answer = i;
          max = arr[i]
      }
      else if(arr[i] == max){
          answer = -1;
      }    
      }
      
  }
  
  return parseInt(answer);
}