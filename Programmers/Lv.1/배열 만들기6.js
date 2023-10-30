function solution(arr) {
    let stk = [];
    for (let i = 0; i < arr.length; i++) {
        if (stk.length === 0) {
            stk.push(arr[i]);
        } else if (stk[stk.length - 1] === arr[i]) {
            stk.pop();
        } else if (stk[stk.length - 1] !== arr[i]) {
            stk.push(arr[i]);
        }
    }
    
    return stk.length ? stk : [-1];
}

//생각하기
//1. let i = 0, i < arr.length i++ (for문을 돈다.)
//2. if ( stk = [] ) { stk.push(arr[i]) }
//3. if ( stk(stk[-1] == arr[i] ) stk.shift(stk[-1]) )
//4. if ( stk(stk[-1] != arr[i] ) stk.push(arr[i]))
//5. return stk.length ? stk : [-1]하면 된다