function solution(lines) {
    const arr = Array(201).fill(0);
    lines.forEach(v => {
        for(let i = v[0]; i<v[1]; i++) arr[i+100] += 1;
    })
    return arr.filter(v => v >= 2).length;
  }