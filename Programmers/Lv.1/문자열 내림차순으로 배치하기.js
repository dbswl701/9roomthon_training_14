function solution(s) {
    var answer = s.split("").sort().reverse().join("");
    return answer;
}

//생각하기.
//해당문제는 sort()함수를 이용하여 풀어보면 된다.
//어제 풀었던 것과 비슷해서, split으로 입출력을 쪼개고, sort로 문자열 내림차순 정렬한다음 join으로 합쳐주면 된다.


//트러블슈팅
//1. sort() 함수가 문자열을 내림차순으로 만드는 방법을 몰랐다. 그래서 찾아봤더니 sort()를 그냥 쓰는게 아니라 boolean값으로 정렬을 다시 해줘야 한다고 했다.
//2. 생각해보니까. 역순으로 내림차순하면 되는거잖아. reverse()함수를 쓰면 됐엇다.