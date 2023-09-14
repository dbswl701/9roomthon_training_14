function solution(people, limit) {
    var answer = 0;
    
    people.sort((a,b)=>a-b);
    console.log(people)
    
    for(let i=people.length-1, j=0;i>=j;i--){
        if(j==i){
            answer++;
            break;
        }
        
        if(people[i]+people[j]<=limit){
            j++;
        }
        answer++
    }
    
    return answer;
}