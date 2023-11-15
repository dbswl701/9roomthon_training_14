function solution(arr) {
    // 배열이 한 개의 요소만 포함하는 경우 [-1] 반환
    if (arr.length === 1) {
        return [-1];
    }

    // 배열에서 최솟값 찾기
    let min = Math.min(...arr);

    // 최솟값 제거
    arr.splice(arr.indexOf(min), 1);

    return arr;
}
