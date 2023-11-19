function solution(citations) {
  citations.sort((a, b) => a-b)
  
  for(let h = citations[citations.length-1]; h>=0; h--) {
      for(let j = 0; j<citations.length; j++) {
          if (h <= citations[j] && h<=citations.length - j) return h;
      }
  }
}