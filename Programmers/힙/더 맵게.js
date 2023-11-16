function solution(scoville, K) {
    let mixCount = 0;
    scoville.sort((a, b) => a - b);

    while (scoville[0] < K && scoville.length > 1) {
        let leastSpicy = scoville.shift();
        let secondLeastSpicy = scoville.shift();
        let mixedSpice = leastSpicy + secondLeastSpicy * 2;

        scoville.push(mixedSpice);
        scoville.sort((a, b) => a - b);
        mixCount++;
    }

    return scoville[0] < K ? -1 : mixCount;
}
// 시간 복잡도에서 탈락한 코드..
// 알고보니 자바스크립트엔 힙을 강제로 만들어줘야한다고 함. 