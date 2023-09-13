function solution(rsp) {
  let answer = '';
  const rsp_win = { 2: 0, 0: 5, 5: 2 };
  
  return [...rsp].map(v => rsp_win[v]).join('');
}