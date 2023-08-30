class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = {};
        answer = new int[num_list.length];
        
        for(int i = num_list.length - 1 ; i >=0 ;i--){
            answer[num_list.length - i-1] = num_list[i];
        }
        
        return answer;
    }
}