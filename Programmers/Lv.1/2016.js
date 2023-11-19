function solution(a, b) {
    const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    
    let totalDays = 0;
    for (var i = 0; i < a - 1; i++) {
        totalDays += months[i];
    }
    totalDays += b - 1;

    return days[totalDays % 7];
}


//생각하기
//제시된 요일은 금요일이며, % 7 을 했을때 나머지를 추가하게 만든다.
//a월 b일이므로 a가 하나씩 증가할때마다 31+29+31+30+...+31 이런식으로 추가한다.
//b - 1은 금요일을 시작으로 나머지를 나눠야 하므로 days를 index[0]부터 시작하게 만든다 