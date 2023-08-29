function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  let an = numer1 * denom2 + numer2*denom1;
  let ad = denom1*denom2;
  
  let GDC=1, GDC_t=2;
  
  while(GDC_t <= an){
      if(ad%GDC_t == 0 && an % GDC_t == 0){
          GDC=GDC_t;
      }
      GDC_t++;
  }
  
  ad/=GDC;
  an/=GDC;
  
  answer = [an, ad];
  
  return answer;
}