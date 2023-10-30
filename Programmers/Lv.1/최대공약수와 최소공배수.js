function solution(n, m) {
    var answer = [];
    let gcd = 1;
    let lcm;
    
    //1. 최대공약수 구하기
    for (let i = 1; i <= Math.min(n, m); i++) {
        if (n % i === 0 && m % i === 0) {
            gcd = i;
        }
    }
    
    //2. 최소공배수 구하기.
    lcm = (n * m) / gcd;
    
    //3. 푸쉬하기
    answer.push(gcd, lcm);
    return answer;
}
    


//생각하기.
//n,m의 최소공약수와 최대공배수를 구해서 return[0],[1]에 push하라. return[0] => 최소공약수 / return[1] => 최대공배수.
//0. 일단 n과 m중에 두 수중에 뭐가 큰지를 알아야함 큰 수는 Math.max(n,m) 작은수는 Math.min(n,m)하면 나옴.
//1. 최대공약수 구하기는 gcd를 구하는건데, 최소공배수는 i로 나누었을때 둘 다 나머지가 0이 나오면 종료하면 됨.
//2. 최소공배수 구하는건 최대공약수가 구해져있다면 n * m 을 곱하고 최대공약수로 나누면 됨.
//3. 두 구한 최대공약수, 최소공배수를 answer배열에 0, 1로 푸쉬하면 된다.