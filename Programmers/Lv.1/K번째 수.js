function solution(array, commands) {
    let answer = [];

    for(let command of commands) {
        // array를 command[0]-1부터 command[1] 인덱스까지 잘라서 새 배열을 생성
        let newArray = array.slice(command[0]-1, command[1]);
        // 새 배열을 정렬
        newArray.sort((a, b) => a - b);
        // 정렬된 배열에서 command[2]-1 인덱스의 값을 answer 배열에 추가
        answer.push(newArray[command[2]-1]);
    }

    return answer;
}

//생각하기. commands 에는 각 원소가 적혀져있고, index[0]부터 index[1]까지, index[2]번에 answer[]에 푸쉬한다.
//commands는 2차원 배열이니까, 2차원 배열을 1차원으로 하나씩 빼내야함. 
//NewArraycommands[0] 배열의 index[0]부터 index[1]까지, index[2]번에 있는 걸 answer에 푸쉬.
//같은 값으로 계속 반복, 해서 다 푸쉬해주면, 그제서야 멈추면 된다.