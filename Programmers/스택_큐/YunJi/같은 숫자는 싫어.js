function solution(arr)
{
    let answer = [];
    let latest = -1;
    
    for (let i of arr) {
        if (latest !== i) {
            answer.push(i);
            latest = i;
        }
        else continue;
    }

    return answer;
}