function solution(n) {
  var answer = 1;
  let i=1;
  for( i=1;answer*i<=n;i++){
      answer*=i;
  }
  return i-1;
}