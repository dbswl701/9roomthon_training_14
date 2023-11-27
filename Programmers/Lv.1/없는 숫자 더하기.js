function solution(numbers) {
    let answer = 0;
    for (let i = 0; i <= 9; i++) {
        if (numbers.indexOf(i) === -1) {
            answer += i;
        }
    }
    return answer;
}

//생각하기
//모든 숫자들 중에 없는 숫자를 파악해서 넣어야한다
//그렇다면 /1-9/일때 indexOf[i] 해서 없다면 answer에 더해준다.
//그러면 해결.