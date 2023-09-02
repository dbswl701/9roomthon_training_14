function solution(my_string) {

  return my_string.split('').filter(x=>!isNaN(parseInt(x))).reduce((prev, curr, idx)=>{ return parseInt(prev)+parseInt(curr)});
}