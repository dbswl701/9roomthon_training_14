function solution(sizes) {
  let garo=[], sero=[];
  
  // sizes.map((x)=> [x[0], x[1]] = [Math.max(...x), Math.min(...x)])
  sizes.forEach(x =>{
      garo.push(Math.max(...x))
      sero.push(Math.min(...x))
  });
  console.log(garo, sero)
  
  return Math.max(...garo) * Math.max(...sero)
}