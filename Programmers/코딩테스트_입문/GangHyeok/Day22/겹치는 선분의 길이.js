function solution(lines) {
  let s = lines.sort((a, b) => a[0] - b[0])
  let arr = Array(Math.max(s[0][1], s[1][1], s[2][1]) - s[0][0]).fill(0);
  s.forEach(([a, b]) => {
    for (let i = a; a < b; a++) {
      arr[a - s[0][0]]++;
    }
  });

  return arr.filter(x => x > 1).length

  //   var s = lines.sort((a, b) => a[0] - b[0])
  //   console.log(s)
  //   let left, right = 0;

  //   if (s[0][1] >= s[2][1]) {
  //     if (s[2][0] <= s[1][1]) {
  //       return s[2][1] - s[1][0];
  //     } else {
  //       return s[2][1] - s[2][0] + s[1][1] - s[1][0];
  //     }
  //   }
  //   else if (s[1][1] >= s[2][1]) {
  //     if (s[1][0] <= s[0][1]) {
  //       return s[2][1] - s[1][0];
  //     }
  //     else if (s[2][0] <= s[0][1]) {
  //       return s[2][1] - s[2][0];
  //     }
  //     else {
  //       return s[0][1] - s[1][0] + s[2][1] - s[2][0];
  //     }

  //   }
  //   else {
  //     console.log(s[0][1] > s[1][0] ? s[0][1] - s[1][0] : 0)
  //     console.log(s[1][1] > s[2][0] ? s[1][1] - s[2][0] : 0)
  //     return (s[0][1] > s[1][0] ? s[0][1] - s[1][0] : 0) + (s[1][1] > s[2][0] ? s[1][1] - s[2][0] : 0);
  //   }

}