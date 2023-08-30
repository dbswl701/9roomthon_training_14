class Solution {
    public int solution(int n) {
        int answer = 0;
        
        int[] six = {1, 2, 3, 6};
        
        for(int i=3;i>=0;i--){
            if(n % six[i] == 0){
                answer = six[i];
                break;
            }
        }
        
        answer = n/answer;
        
        return answer;
    }
}