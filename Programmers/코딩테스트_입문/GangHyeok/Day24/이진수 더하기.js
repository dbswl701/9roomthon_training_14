function solution(bin1, bin2) {
  var answer = '';
  
  [bin1, bin2] = [bin1.length<bin2.length?bin1.split('').map(x=>parseInt(x)):bin2.split('').map(x=>parseInt(x)),bin1.length>=bin2.length?bin1.split('').map(x=>parseInt(x)):bin2.split('').map(x=>parseInt(x))]
  console.log(bin1, bin2)
                  
  for(let i =bin1.length-1;i>=0;i--){
      if(bin1[i]){
          bin2[i+bin2.length-bin1.length] +=bin1[i];
          console.log(i, bin2)
          for(let j = bin2.length-1;j>=0;j--){
              if(j!=0&&bin2[j]==2){
                  bin2[j-1]+=1;
                  bin2[j] = 0;
              }
              else if(j==0&&bin2[j]==2){
                  bin2.unshift(1);
                  bin2[1] = 0;
              }
          }
          console.log(i, bin1, bin2)
      }
  }
  
  return bin2.join('');
}