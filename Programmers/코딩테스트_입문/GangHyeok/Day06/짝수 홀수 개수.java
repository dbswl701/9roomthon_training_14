class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = {};
        int odd=0, even=0;
        
        for(int i=0;i<num_list.length;i++){
            if(num_list[i]%2 == 0){
                even++;
            }
            else{
                odd++;
            }
        }
        
        answer = new int[2];
        answer[0] = even;
        answer[1] = odd;
        
        return answer;
    }
}