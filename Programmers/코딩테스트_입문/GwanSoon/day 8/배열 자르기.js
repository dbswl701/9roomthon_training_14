function solution(numbers, num1, num2) {
    var answer = [];
    while(num1 <= num2) {
        answer.push(numbers[num1])
        num1 = num1 + 1
    }
    return answer;
}