function solution(s) {
    let removeZeroCount = 0; // 0을 제거한 횟수
    let binaryChangeCount = 0; // 이진 변환을 진행한 횟수

    while (s !== "1") {
        let zeroCount = 0;
        let newString = "";

        // 문자열 s를 순회하며 '0'의 개수를 세고, '0'이 아닌 문자는 newString에 추가
        for (let char of s) {
            if (char === '0') {
                zeroCount += 1;
            } else {
                newString += char;
            }
        }

        // '0'의 개수를 제거한 횟수에 추가
        removeZeroCount += zeroCount;

        // 남은 문자열의 길이를 이진수로 변환
        s = newString.length.toString(2);

        // 이진 변환 횟수를 1 증가
        binaryChangeCount += 1;
    }

    return [binaryChangeCount, removeZeroCount];
}