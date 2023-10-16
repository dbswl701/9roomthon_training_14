import java.util.*;

class Solution {
    int total = 0;

    public int solution(int bridge_length, int weight, int[] truck_weights) {
        Queue<Truck> waitQ = new LinkedList<>();
        Queue<Truck> moveQ = new LinkedList<>();

        for (int tw : truck_weights) {
            waitQ.add(new Truck(tw));
        }

        int answer = 0;

        while (!waitQ.isEmpty() || !moveQ.isEmpty()) {
            answer++;
            nextTime(waitQ, moveQ, weight, bridge_length);
        }

        return answer;
    }

    public void nextTime(Queue<Truck> waitQ, Queue<Truck> moveQ, int weight, int bl) {
        if (!waitQ.isEmpty() && moveQ.isEmpty()) {
            Truck t = waitQ.poll();

            moveQ.add(t);
            total += t.weight;

            return;
        }

        for (Truck t : moveQ) {
            t.moving();
        }

        if (moveQ.peek().move >= bl) {
            Truck t = moveQ.poll();
            total -= t.weight;
        }

        if (waitQ.isEmpty()) return;

        if (total + waitQ.peek().weight <= weight) {
            Truck t = waitQ.poll();

            moveQ.add(t);
            total += t.weight;
        }
    }
}

class Truck {
    int weight;
    int move;

    public Truck(int weight) {
        this.weight = weight;
        this.move = 0;
    }

    public void moving() {
        this.move++;
    }
}