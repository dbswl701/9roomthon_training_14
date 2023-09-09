function solution(my_string) {
  return my_string.split('').map(x=>x==x.toLowerCase()?x.toUpperCase():x.toLowerCase()).join('');
  
}