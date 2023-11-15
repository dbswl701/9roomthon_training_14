function solution(s, skip, index) {
    const fullAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphabet = "";
  
    // 1) skip 문자를 제외하고 alphabet을 생성
    for (let i = 0; i < fullAlphabet.length; i++) {
      if (!skip.includes(fullAlphabet[i])) {
        alphabet += fullAlphabet[i];
      }
    }
  
    let result = "";
  
    // 2) 각 문자를 index만큼 이동시킨 새로운 문자로 변경
    for (let i = 0; i < s.length; i++) {
      const currentChar = s[i];
      const alphabetIndex = alphabet.indexOf(currentChar);
  
      // alphabet 배열에 문자가 있을 경우에만 처리
      if (alphabetIndex !== -1) {
        const newIndex = (alphabetIndex + index) % alphabet.length;
        result += alphabet[newIndex];
      }
    }
  
    return result;
  }