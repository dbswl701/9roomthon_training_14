function solution(cipher, code) {
  return [...cipher].filter((v, idx) => (idx+1)%code === 0).join('');
}