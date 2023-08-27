function solution(num_list) {
    
    let a = 0; // 짝수 함수
    let b = 0; // 홀수 함수
    let count = 0; // 카운트 함수
    
    while(count < num_list.length) {
      if (num_list[count] % 2 === 0) {
        a = a + 1;
    } else { 
        b = b + 1;
    }
       
    count = count + 1;
}
    return [a, b];
}