class Solution {
    public int[] solution(int numer1, int denom1, int numer2, int denom2) {
        int[] answer = {};
        int an = numer1 * denom2 + numer2 * denom1;
        int ad = denom1 * denom2;
        int GDC = 1;
        int GDC_t = 2;
        
        while(GDC_t <= an){
            
            if(ad % GDC_t == 0 && an % GDC_t == 0){
                GDC = GDC_t;
            }
               GDC_t ++;
        }
        
        ad/=GDC;
        an/=GDC;
    
        answer = new int[2];
        answer[0] = an;
        answer[1] = ad;
        
        
        return answer;
    }
}