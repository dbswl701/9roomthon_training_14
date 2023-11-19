function solution(s){
  const stack = [];
  
  for(const v of s) {
      if (v === '(') stack.push(0);
      else if(stack.length) stack.pop();
      else return false;
  }
  return stack.length === 0 ? true : false;
}