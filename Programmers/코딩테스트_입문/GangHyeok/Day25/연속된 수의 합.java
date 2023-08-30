class Solution {
    public int[] solution(int num, int total) {
        int[] answer = new int[num];
        
        int a, idx;
        a = total / num;
        
        if(num%2 == 1){
            idx = num/2;
        }
        else{
            idx = num/2-1;
        }
        
        for(int i=0;i<num;i++){
            answer[i] = a;
        }
        
        for(int i=0;i+idx<num;i++){
            answer[i+idx]+=i;
        }
        
        for(int i=0;idx-i>=0;i++){
            answer[idx-i]-=i;
        }
        
        return answer;
    }
}