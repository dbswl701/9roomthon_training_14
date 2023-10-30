function solution(d, budget) {
    let answer = 0; // result
    let sum = 0; // deps[i]를 순서대로 플러스하는 함수
    let deps = [...d.sort((a,b) => a -b)] // d를 정렬해놓고 스프레드하기.
    
    //for문을 돌려서, deps[i]를 구현해준다.
    for (let i = 0; i < deps.length; i++) {
        if (sum + deps[i] > budget) { 
    // deps[i]를 플러스 해주는 과정에서, sum+deps[i] budget보다 작거나 같으면 멈춘다.
            break;
    }
         sum += deps[i]; //통과한다면 deps[i]를 sum에 더하고
         answer += 1; //answer에 +1 카운팅 한다.
    }   
    
    return answer;
}


//생각하기
//1. d개의 부서만큼 지원해줄 budget을 기준으로 한다.
//2. d.sort()를 통해 부서의 오름차순으로 정렬해준후, deps[i]를 계속 더해준 값이 budget보다 작거나 같은 수까지만을 지원하게 하면 된다.
//3. deps[0] <= budget 인가? deps[0] + deps[1] <= budget인가. 이걸 계속 등비해야함. <= 이부분을 만들기 어렵네.
//4. 이 방법은 greedy 방법과 비슷한 듯 하다.