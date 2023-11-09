function solution(clothes) {
  const hash = {};
  
  clothes.forEach((cloth) => {
      if (!Object.keys(hash).includes(cloth[1])) hash[cloth[1]] = [cloth[0]] 
      else hash[cloth[1]].push(cloth[0])
  })
  
  return Object.values(hash).reduce((acc, cur) => acc * (cur.length+1), 1) -1;
}