function solution(operations) {
    let queue = [];

    operations.forEach(op => {
        let [command, num] = op.split(' ');

        if (command === 'I') {
            // 숫자 삽입
            queue.push(parseInt(num));
            queue.sort((a, b) => a - b);
        } else if (queue.length > 0) {
            if (num === '1') {
                // 최댓값 삭제
                queue.pop();
            } else {
                // 최솟값 삭제
                queue.shift();
            }
        }
    });

    if (queue.length === 0) {
        return [0, 0];
    } else {
        return [queue[queue.length - 1], queue[0]];
    }
}