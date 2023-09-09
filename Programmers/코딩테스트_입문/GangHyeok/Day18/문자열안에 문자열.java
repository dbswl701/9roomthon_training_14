class Solution {
    public int solution(String str1, String str2) {
        int answer = 2;
        
        for(int i=0;i<str1.length();i++){
            if(str1.charAt(i) == str2.charAt(0)){
                if(str2.length() == 1){
                    answer = 1;
                    break;
                }
                for(int j=1;j<str2.length();j++){
                    if(i+j >= str1.length() || str1.charAt(i+j) != str2.charAt(j)){
                        answer = 2;
                        break;
                    }
                    else{
                        answer = 1;
                    }
                }
                if(answer == 2){
                    continue;
                }
                else{
                    break;
                }
            }
        }
        
        return answer;
    }
}