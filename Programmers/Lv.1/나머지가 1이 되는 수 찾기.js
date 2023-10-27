function solution(n) {
    var answer = 0;
    for ( let i = 1; i < n; i++ ) {
        if ( n % i == 1 )
            return i
}
    
}

//생각하기
//간단하게 생각해서, 나머지가 1이 되도록 하는 가장 작은 자연수를 내보자.
//2부터 쭉 나눠보면 되지않을까?