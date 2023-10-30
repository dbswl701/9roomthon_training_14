function solution(dots) {
    const leans = []

    for(let i = 0; i < dots.length; i++) {
        const dotA = dots[i];
        for(let j = i + 1; j < dots.length; j++) {
            const dotB = dots[j]
            const lean = (dotB[1] - dotA[1])  / (dotB[0] - dotA[0])

            if(leans.includes(lean)) return 1
            else leans.push(lean)
        }
    }

    return 0;
}
//생각하기.
//선분이 평행하다? 길이가 같다라는 뜻이 아닐까?
//두 직선이 평행이 되는 경우가 있다면 1 없으면 0이라는건, 점이 총 4개고 총 4개의 선이 있다는건줄 알았는데
//서로 다른 두 점이 겹치는 경우는 없으니, x,y[1] 1은 사용 불능하니까, 1-2 3-4 1-3 2-4 1-4 2-3 이렇게 세개만 가능한거구나.
//그렇다면 