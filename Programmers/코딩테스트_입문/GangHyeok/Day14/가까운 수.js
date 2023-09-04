function solution(array, n) {
  var answer = 0;
  
  array.sort((a, b)=>a-b);
  
  let h=0, i = parseInt(array.length/2), l=array.length-1;
  if(n <= array[h]){
      return array[h];
  }
  else if(n >= array[l]){
      return array[l];
  }
  
  console.log(array);
  
  while(true){
      console.log(h, i , l+ ': ' + array[i]);
      if(l-i <= 1 && i-h<=1){
              console.log(n-array[h], n-array[i], n-array[l]);
              switch(Math.min(Math.abs(n-array[h]), Math.abs(n-array[i]), Math.abs(n-array[l]))){
                  case Math.abs(n-array[h]):
                      return array[h];
                  case Math.abs(n-array[i]):
                      return array[i];
                  case Math.abs(n-array[l]):
                      return array[l];
              }
      }

      if(array[i] < n){
          
          h=i;
          i = parseInt((i+l)/2);
      }
      else if (array[i]==n){
          return n;
      }
      else{
          l=i;
          i=parseInt((i+h)/2);
      }
  }
  return answer;
}