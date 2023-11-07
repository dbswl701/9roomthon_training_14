function solution(clothes) {
    var answer = 1; // 조합의 수를 계산하기 위해 1로 시작
    let clothesCounter = {}; // 옷의 종류별 개수를 저장할 객체

    // 옷을 종류별로 분류하며 각 종류의 옷 개수를 세기
    for (let i = 0; i < clothes.length; i++) {
        let type = clothes[i][1];
        if (type in clothesCounter) {
            clothesCounter[type]++;
        } else {
            clothesCounter[type] = 1;
        }
    }

    // 객체의 값을 순회하며 각 종류별 옷의 수 + 1(해당 종류의 옷을 입지 않는 경우)를 곱함
    for (let key in clothesCounter) {
        answer *= (clothesCounter[key] + 1);
    }

    // 모든 종류의 옷을 입지 않는 경우를 빼기 위해 -1
    return answer - 1;
}