function solution(a, b) {
  let tmp=0;
  
  //최대 공약수 찾기
  for(let i=1;i<=Math.min(a,b);i++){
      if(a%i==b%i&&a%i==0){
          tmp = i;
      }
  }
  
  //약분
  a/=tmp
  b/=tmp
  
  while(b>=5&&b%5==0){
      b/=5;
  }
  
  while(b>=2&&b%2==0){
      b/=2;
  }
  
  return b==1?1:2;
}