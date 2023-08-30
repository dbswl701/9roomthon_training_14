class Solution {
    public int solution(int price) {
        double answer = 0;
        
        if(price>=500000){
            answer = (double)price * 0.8;
        }
        else if(price >= 300000){
            answer = (double)price *0.9;
        }
        else if (price >= 100000){
            answer = (double)price *0.95;
        }
        else{
            answer = (double)price;
        }
        
        return (int)answer;
    }
}