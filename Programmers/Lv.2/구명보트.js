function solution(people, limit) {
    // 사람들의 몸무게를 오름차순으로 정렬
    people.sort((a, b) => a - b);
    
    let count = 0; // 필요한 구명보트의 수
    let i = 0; // 가장 가벼운 사람의 인덱스
    let j = people.length - 1; // 가장 무거운 사람의 인덱스

    while (i <= j) {
        // 가장 무거운 사람과 가장 가벼운 사람의 무게 합이 limit 이하인 경우
        if (people[i] + people[j] <= limit) {
            i++; // 가벼운 사람의 인덱스 증가
        }
        // 구명보트에 태울 사람을 결정했으므로 무거운 사람의 인덱스 감소
        j--;
        // 구명보트 하나 추가
        count++;
    }

    return count;
}

//생각하기
//각 배열인 people에서 index[i]를 합쳐서 limit이 넘지 않는가? 에 대해서 찾고, 
//넘지 않는다면 count++ 하며, 넘는다면 보트를 하나 지급하는 방식으로 풀어나간다.