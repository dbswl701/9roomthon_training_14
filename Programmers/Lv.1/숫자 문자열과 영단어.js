function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    numbers.forEach((i,idx)=>s=s.replaceAll(i,idx))
    return Number(s);
}

//생각하기.
//1. 먼저 0부터 9까지 영어로 치환되는걸 만들어준다.