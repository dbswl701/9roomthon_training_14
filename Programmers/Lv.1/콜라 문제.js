function solution(a, b, n) {
    let totalColas = 0;  // 상빈이가 받을 수 있는 전체 콜라의 병 수

    // 보유 중인 빈 병이 a개 미만이면 루프를 종료
    while (n >= a) {
        // 현재 보유 중인 빈 병으로 교환 가능한 콜라의 병 수 계산
        const exchangedColas = Math.floor(n / a) * b;

        // 콜라를 받은 후 남은 빈 병의 수 업데이트
        n = n % a;

        // 받은 콜라의 병 수를 총 콜라의 병 수에 더함
        totalColas += exchangedColas;
        
        // 남은 빈 병을 새로 가져다주어서 반복
        n += exchangedColas;
    }

    return totalColas;
}

//생각하기
//빈병 a개가 있으면 콜라 b병을 줄때, 빈병 n개를 가져다주면 몇개를 받는가?
//그렇다면 먼저, 빈병 n이 빈병 a보다 크거나 같을때 while문을 돌려서 b만큼 total에 추가한다
//그리고 남은 콜라의 병 수를 업데이트하고, 받은 콜라 병 수와 총 콜라 병 수에 더하고
//남은 빈 병을 새로 가져다주어서 반복한다.
//그리고 다시 while문을 돌아서 false가 나오면 종료하면 된다.