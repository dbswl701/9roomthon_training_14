function solution(cards1, cards2, goal) {
    var answer = '';
    let GoalAchieve = [];
    for ( let i = 0; i < goal.length; i++) {
        if ( cards1[0] == goal[i] ) {
            GoalAchieve.push(cards1[0]);
            cards1.shift();
        } else if ( cards2[0] == goal[i] ) {
            GoalAchieve.push(cards2[0]);
            cards2.shift();
        } else {
            return "No";
        }
    }
    for ( let i = 0; i < goal.length; i++) {
        if (GoalAchieve[i] != goal[i]) {
            return "No";
        }
    }
    return "Yes";
}