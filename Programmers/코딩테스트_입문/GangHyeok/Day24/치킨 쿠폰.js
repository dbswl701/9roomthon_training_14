function solution(chicken) {
  let coupon = 0, answer = 0;
  
  while(chicken+coupon>10){ //다음에 시킬 치킨 수와 기존에 갖고 있던 쿠폰수 합쳐서 10 이상일 때까지만 돌리기
      coupon = parseInt(chicken/10)
      answer+=coupon; 
      chicken = chicken%10 + coupon;
      console.log(coupon, chicken, answer);
  }
  
  
  
  return answer;
}