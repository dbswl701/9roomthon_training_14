class Solution {
    public int[] solution(int[] numbers) {
        int[] answer = {};
        int i=0;
        int n = numbers.length;
        answer = new int[n];
        for(i=0;i<n;i++){
            answer[i] = numbers[i]*2;
        }
        
        return answer;
    }
}