function solution(num) {
    let count = 0;
    while (num !== 1 && count < 500) {
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }
        count++;
    }
    if (count === 500) {
        return -1;
    }
    return count;
}

//생각하기
//if ( num % 2 == 0 ) 이면 / 2 하고 count++ 한다
//if ( num % 2 == 1 ) 이면 * 3 + 1 한다. count++ 한다.
//if ( num == 1 ) 이면 멈추고 count를 result한다.
//if ( count == 500 ) 이라면, result에 -1을 나오게 한다.