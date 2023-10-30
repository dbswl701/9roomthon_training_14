function solution(arr1, arr2) {
    var answer = [[]];
    
    for (var i=0; i<arr1.length; i++){
        answer[i] =[];
        for(var j=0; j<arr1[i].length; j++){
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return answer;
}

//생각하기.
//1. 이중행렬안에 있는 arr[i][j]이랑  + arr2[i][j]과 이런식으로 더해주면 되는듯.
//2. 다만 i,j는 두 배열이 동시에 올라가야하며, 서로 다른 [i][j]를 더해주면 안된다.
//3. 그럼 i,j가 동시에 올라가니까, answer[i] 배열을 다시 만들어주고,
//4. arr1[i][j] + arr2[i][j]를 answer배열에 다시 푸쉬해주면 된다.