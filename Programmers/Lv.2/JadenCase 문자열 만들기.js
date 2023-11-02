function solution(s) {
    var answer = '';
    for (let i = 0; i < s.length; i++) {
      if (i === 0 || s[i-1] === " ") {
        answer += s[i].toUpperCase();
      } else {
        answer += s[i].toLowerCase();
      }
    }
    return answer;
}

//생각하기
//간단하게 첫째문자가 숫자면 그냥 그대로 푸싱, 소문자면 대문자로 만들면 된다.

//스도코드
//s를 공백문자를 기준으로 쪼개준다 => s.split(" ")
//그다음 쪼개진 문자중에 index[i][0]를 가져와서, == 소문자인가?를 물어보고.
//아니라면 그 한 알파벳만 Uppercase해주고, 나머지(대문자/숫자)라면 패싱한다.
//그 후 파편화된 문자들을 하나로 Join() 해준다.
