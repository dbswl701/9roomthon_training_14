function solution(arr)
{
    var answer = [];

    for(var i of arr){
        if(answer.at(-1) != i){
            answer[answer.length] = i;
        }
    }
    console.log(arr);
    console.log(typeof arr)
    
    return answer;
}