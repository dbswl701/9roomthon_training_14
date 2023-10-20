function solution(answers) {
    let stu1 = [1,2,3,4,5];
    let stu2 = [2,1,2,3,2,4,2,5];
    let stu3 = [3,3,1,1,2,2,4,4,5,5];
    let Correctanswer = [0,0,0];
    
    for (let i = 0; i < answers.length; i++) {
        if (stu1[i % 5] === answers[i]) {
            Correctanswer[0] += 1;
        }
        if (stu2[i % 8] === answers[i]) {
            Correctanswer[1] += 1;
        }
        if (stu3[i % 10] === answers[i]) {
            Correctanswer[2] += 1;
        }
    }

    const maxScore = Math.max(...Correctanswer);
    const result = [];
    
    for (let i = 0; i < Correctanswer.length; i++) {
        if (Correctanswer[i] === maxScore) {
            result.push(i + 1);
        }
    }

    return result;
}