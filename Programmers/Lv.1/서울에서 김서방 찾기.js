function solution(seoul) {
    let FindKim = seoul.indexOf("Kim")
    return "김서방은 " + FindKim + "에 있다";
}

//생각하기.
//문자열 배열 seoul은 , 를 기준으로 split 해주면 된다, 그 후 indexOf를 통해 앞에서 인덱스열을 만들고,
//인덱스[i] 값에 있는것을 var answer로 반환한다
//알고보니 기댓값은 "김서방은" + index[i] + "에 있다".