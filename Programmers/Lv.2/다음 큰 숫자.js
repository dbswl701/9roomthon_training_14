function solution(n) {
    const numOnes = countOnes(n); // n의 2진수 표현에서 1의 개수를 센다.
    
    let nextBigNumber = n + 1;
    while (countOnes(nextBigNumber) !== numOnes) { // 같은 개수의 1을 갖는 수를 찾을 때까지 반복한다.
        nextBigNumber++;
    }

    return nextBigNumber;
}

function countOnes(n) {
    return n.toString(2).split('').filter(c => c === '1').length;
}