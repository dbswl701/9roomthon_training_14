function solution(dots) {
  dots.sort((a,b) => a[0] - b[0]);
  
  const width = Math.abs(dots[0][1] - dots[1][1]);
  const height = Math.abs(dots[0][0] - dots[2][0]);
  
  return width * height;
}