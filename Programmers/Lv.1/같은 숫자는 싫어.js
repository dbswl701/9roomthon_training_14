function solution(arr) {
    const answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        // 현재 원소가 다음 원소와 다를 때만 answer에 추가
        if (arr[i] !== arr[i + 1]) {
            answer.push(arr[i]);
        }
    }
    
    return answer;
}

//생각하기
//배열에서 중복되는 숫자를 하나만 남기면 되는 문제임. 다만 정렬하면 안되고 앞에서부터 나가야함.
//그렇다면 새로운 배열을 만들어서, indexOf 로 앞쪽부터 찾아줘서 하나만 푸쉬해주면 되는거 아닌가?

//중복을 제거하는 방법을 알아야함
//answer배열에 다시 넣을 방법. push하면 된다.