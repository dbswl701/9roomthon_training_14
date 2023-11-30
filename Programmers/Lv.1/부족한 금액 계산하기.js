function solution(price, money, count) {
    let changes = 0;
    
    for (let i = 1; i <= count; i++) {
        changes += price * i;
    }

    // 부족한 금액 계산
    const shortage = Math.max(0, changes - money);

    return shortage;
}

//생각하기
//기존 price원인 놀이기구를 count 만큼 타고싶으면 price * count 된다고 한다.
//즉 price * count 된 가격에서, money값을 보고, 부족하다면 changes > money = result가 되고,
//부족하지 않다면, 즉 changes <= money 라면 0을 반환하면 된다.