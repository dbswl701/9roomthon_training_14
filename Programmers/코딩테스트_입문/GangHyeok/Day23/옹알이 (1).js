function solution(babbling) {
  var answer = 0;
  
  let once = ["aya", "ye", "woo", "ma"], twice = [], threetimes = [], fourtimes =[]
  
  // 경우의 수 다 구하기
  for(let i of once){
      for(let j of once){
          if(i==j){ continue}
          twice[twice.length] = i+j;
          for(let k of once){
              if (twice[twice.length-1].includes(k)) {continue;}
              threetimes[threetimes.length] = i+j+k
              for(let l of once){
                  if(threetimes[threetimes.length-1].includes(l)){continue }
                  fourtimes[fourtimes.length] = i+j+k+l
              }
          }
      }
  }
  
  for(let b of babbling){
      if(b.length >= 10){
          for(let f of fourtimes){
              if (b == f){
                  answer+=1;
              }
          }
      }
      else if(b.length >= 7){
          for(let t of threetimes){
              // console.log(b," ", t," ", t==b)
              if(b == t){
                  answer+=1;
              }
          }
      }
      else if(b.length >= 4){
          for(let t of twice){
              // console.log(b," ", t," ", t==b)
              if (b==t){
                  answer+=1;
              }
          }
      }
      else{
          for(let o of once){

              if(b==o){
                  answer+=1;
              }
          }
      }   
  }
  
  return answer;
}