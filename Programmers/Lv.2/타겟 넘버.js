function solution(numbers, target) {
    var answer = 0;

    dfs(0, 0);

    function dfs(sum, index) {
        if (index === numbers.length) {
            if (sum === target) {
                answer += 1;
            }
            return;
        }
        dfs(sum + numbers[index], index + 1);
        dfs(sum - numbers[index], index + 1);
    }
    return answer;
}