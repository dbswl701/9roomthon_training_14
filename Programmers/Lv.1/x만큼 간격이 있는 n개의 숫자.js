function solution(x, n) {
    var answer = [];
    for ( let i = 1; i < n+1; i++) {
        answer.push(x*i)
    }
        
    return answer;
}

//생각하기
//정수 x의 등비수열을 n만큼 진행해라. 이거구나?