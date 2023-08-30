class Solution {
    public int solution(int[] array) {
        int answer = 0;
        int []arr = new int[1000];
        int max = 0;
        
        for(int i=0;i<array.length;i++){
            arr[array[i]]++;
        }
        
        for(int i=0;i<1000;i++){
            if(arr[i]>max){
                answer = i;
                max = arr[i];
            
            }
            else if(arr[i] == max){
                answer = -1;
            }
        }
        
        return answer;
    }
}