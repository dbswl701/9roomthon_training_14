function solution(s) {
    let answer = 0;
    let index = 0;
    
    while (index < s.length) {
        let firstChar = s[index];
        let firstCharCount = 1;
        let otherCharCount = 0;
        index++;
        
        while (index < s.length && firstCharCount !== otherCharCount) {
            if (s[index] === firstChar) {
                firstCharCount++;
            } else {
                otherCharCount++;
            }
            index++;
        }
        
        answer++;
    }
    
    return answer;
}

//생각하기
//1. 첫 글자를 읽어서 저장해야함.
//2. 그리고 index[i]가 첫 글자와 같은지 if문을 통해서 확인하고, 맞다면 거기서 split 하면 됨.
//3. 다른 글자면 아무거나 상관없이 카운트가 올라간다는 점을 주의.
//4. 그리고 문자열이 잘리면 카운트가 초기화되고, 잘라낸 첫문자가 뭔지 저장하고 다시 2-3을 반복.
//5. 그리고 잘린 문자열의 개수를 저장하는 값을 지정해놓고 리턴함.