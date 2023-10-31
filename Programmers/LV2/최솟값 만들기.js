function solution(A, B) {
    var answer = 0;
    let SortA = A.sort((a, b) => a - b);
    let SortB = B.sort((a, b) => b - a);
    for (let i = 0; i < A.length; i++)
        answer += SortA[i] * SortB[i];

    return answer;
}

//입출력을 만들면 되는 문제
//A[i] * B[i]) 를 해서, 마지막에 최소값을 만들어주면 된다.
//문제는 최소값을 만들어야 한다는 것.