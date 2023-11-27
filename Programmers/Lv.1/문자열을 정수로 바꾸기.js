function solution(s) {
    var answer = Number(s);
    return answer;
}

//생각하기
//s가 문자열일때 숫자로 치환하는 방법은 Number() 하면 되는거 아닌가?
//그리고 index[0]이 "+"인지 확인하고, true면 그냥 반환, False면 -를 붙여 반환해라. 하면 되는거 아닌가?
//그게 아니라 그냥 Number(s)하면 됐다..
//그리고 덧붙여서. 사칙연산하면 숫자로 바뀐단다.. 예를들면 /1 하면 된다더라..