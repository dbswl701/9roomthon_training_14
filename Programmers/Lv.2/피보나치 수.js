function solution(n) {
    let fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib[i] = (fib[i - 1] + fib[i - 2]) % 1234567;
    }

    return fib[n];
}

//생각하기
//2이상의 n이 입력되었을때, n번째 피보나치수를 % 1234567 = return인 함수를 만들어라.
//F(n) = F(n-1) + F(n-2) 인거잖아.
//그럼 예제 1번을 기준으로 F(i) = F(i-1) + F(i-2) 배열을 만들어주면 되는 함수네.