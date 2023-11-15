function solution(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        for (let j = i; j <= n; j++) {
            sum += j;
            if (sum == n) {
                count++;
                break;
            } else if (sum > n) {
                break;
            }
        }
    }
    return count;
}

//생각하기
//0부터 순회해서 n만큼 순회하는 자연수들을 만든 다음
//1부터 합쳐서 n이 나오는 순간 count++ 한다
//그리고 합쳐진 숫자가 n을 넘어가는 순간 다음 인덱스부터 더하는걸로 넘어간다.