function solution(i, j, k) {
    var answer = '';
    
    for(;i<=j;i++){
        answer+=i;
    }
    
    return answer.split('').filter(x => x == k).length
}