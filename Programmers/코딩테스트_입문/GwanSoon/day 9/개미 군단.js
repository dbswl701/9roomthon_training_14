function solution(hp) {
  let count = 0;
  if(hp >= 5) {
      count += parseInt(hp / 5); 
      hp -= parseInt(hp / 5) * 5;
  }
  if(hp >= 3) {
      count += parseInt(hp / 3);
      hp -= parseInt(hp /3) * 3;
  }
  if(hp >= 1) {
      count += parseInt(hp / 1);
      hp -= parseInt(hp / 1 ) * 1;
  }
  return count;
}