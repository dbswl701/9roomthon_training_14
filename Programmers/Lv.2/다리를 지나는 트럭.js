function solution(bridge_length, weight, truck_weights) {
    // 다리를 표현하는 큐. 0은 트럭이 없는 상태를 의미한다.
    const bridge = Array(bridge_length).fill(0);
    
    let curWeight = 0;  // 현재 다리 위의 트럭 무게
    let time = 0;  // 경과 시간

    while (truck_weights.length > 0) {
        // 매 초마다 다리 위의 제일 앞의 트럭(가장 먼저 들어온 트럭)을 내보낸다.
        curWeight -= bridge.shift();

        // 다음 트럭이 다리에 진입할 수 있는 경우
        if (curWeight + truck_weights[0] <= weight) {
            const nextTruck = truck_weights.shift();
            bridge.push(nextTruck);
            curWeight += nextTruck;
        } else {
            // 진입할 수 없는 경우, 다리에 0을 추가(트럭이 없는 상태)
            bridge.push(0);
        }

        time++;  // 1초 경과
    }

    // 마지막 트럭이 다리를 완전히 건너는데 걸리는 시간(다리의 길이)를 더한다.
    time += bridge_length;

    return time;
}