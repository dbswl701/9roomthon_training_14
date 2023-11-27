function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(nums) {
    let count = 0;
    
    // 3개의 숫자 조합을 생성
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                // 소수 확인
                if (isPrime(sum)) {
                    count++;
                }
            }
        }
    }

    return count;
}

//아이디어
/* - 먼저 소수를 만드는 함수를 만듭니다.
- 소수를 만드는 법은, 2부터 num까지 나누어보기로 판단.
- 그 다음 이중 for문을 통해 3개의 숫자 조합을 생성합니다.
- 그리고 생성한 배열의 합이 소수인지 판별하고, count에 더합니다 */