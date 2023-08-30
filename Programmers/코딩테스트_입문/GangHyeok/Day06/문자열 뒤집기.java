class Solution {
    public String solution(String my_string) {
        // char[] answer = new char[my_string.length()];
        String answer = "";
        
        for(int i=my_string.length()-1;i>=0;i--){
            // answer[my_string.length()-1 -i]+ = my_string.charAt(i);
            answer += my_string.charAt(i);
        }
        
        return answer;
    }
}