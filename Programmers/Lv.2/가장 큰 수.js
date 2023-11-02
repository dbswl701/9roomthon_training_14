function solution(numbers) {
    // 숫자들을 문자열로 변환
    let strNumbers = numbers.map(num => num.toString());
    
    // 문자열로 변환한 숫자들을 서로 연결하여 비교하는 방식으로 정렬
    strNumbers.sort((a, b) => (b + a) - (a + b) > 0 ? 1 : -1);
    
    // 정렬된 문자열들을 연결하여 결과를 생성
    let answer = strNumbers.join('');
    
    // 예외사항) 만약 모든 숫자가 0이라면 "0"을 반환
    return answer[0] === '0' ? '0' : answer;
}

//생각하기
//정수가 주어진것들이 string 처리 되었을때, 가장 큰 수를 찾는 방식.
//생각해보니까 이거, 문자열로 치환하고 sort(b-a)쓰면 역사전순 치환되니까, 가장 큰 사전순으로 나오지 않을까?
//먼저 number에 들어있는 아이들을 ,을 기준으로 잘라내주고, 그다음 모두 string으로 바꾼 후에
//역사전순으로 sort 정렬해주고, 그걸 join 해서 answer에 넣으면 해결되는게 아닐까?