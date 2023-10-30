function solution(ineq, eq, n, m) {
    if (ineq === '>') {
        if (eq === '=') {
            return n >= m ? 1 : 0;
        } else if (eq === '!') {
            return n > m ? 1 : 0;
        }
    } else if (ineq === '<') {
        if (eq === '=') {
            return n <= m ? 1 : 0;
        } else if (eq === '!') {
            return n < m ? 1 : 0;
        }
    }
    return 0; 
}

//문제 읽기
//1. 풀이과정은  n [ ineq + eq ] m 일때, 조건이 true면 1 false면 0을 반환하면 된다.
//2. 그렇다면 ineq와 eq를 더 했을때 수식이 나오면 조건 1, eq가 ! 라면 !는 배제하는게 조건 2이다.
//3. 그 다음, 해당식이 참인지 거짓인지 판별하면 profit.

//문제 차근차근 풀어보기
//1. 먼저 ineq + eq가 수식이 되는지를 판별해야한다. if문을 통해 !가 있는지 확인하고, 있으면 ineq를 다시 반환하자.
//2. 그 다음 n + sign + m 을 했을 때, 참이면 1 거짓이면 0이 나오게 하면 된다.

