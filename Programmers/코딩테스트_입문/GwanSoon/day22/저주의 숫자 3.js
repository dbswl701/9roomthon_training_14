function solution(n) {
    var answer = 0;
    let ArrN = 0;
        for ( let i = 1; i <= n; i++) {
             ArrN++
            while ( ArrN % 3 === 0 || ArrN.toString().includes('3') ) {
                ArrN++ }
        }
    return ArrN;
}

//생각하기
//3x 마을에선 3을 무조건 빼고 다음걸로 리턴시키는군. 근데 n은 100까지니까,
//1. for문 돌려서 일단 3이 들어가는 숫자는 그 다음 숫자로 넘어가게한다.
//2. 그리고 % 3 === 0 일때도, 그 다음 숫자로 넘어가게 한다.
//3. 그럼 완성 아닐까?