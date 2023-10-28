function solution(s) {
    let len = s.length
    if ( len % 2 === 0 ) {
        return s.substring(len / 2 - 1, len / 2 + 1);
    } else {
        return s.charAt(len / 2);
    }
    
}

//중앙값 가져오는 방법.
//인덱스가 짝수일때 s.length / 2 의 index 값을 가져오면 되고
//인덱스가 홀수일땐 s.length / 2 의 + 1 - 1 index값을 가져오면 된다.