function solution(arr) {
    var answer = 0;
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }
    return answer / arr.length;
}

//생각하기
//for문을 돌면서 arr[i]를 다 더하고, / arr.length 해서 answer에 넣는다