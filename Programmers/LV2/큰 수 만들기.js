function solution(number, k) {
    const Arr1 = []; 
  
    for (let i = 0; i < number.length; i++) {
      const current = number[i];
  
      while (k > 0 && Arr1.length > 0 && Arr1[Arr1.length - 1] < current) {
        Arr1.pop(); 
        k--;
      }
      Arr1.push(current); 
    }
  
    if (k > 0) {
      Arr1.splice(-k, k);
    }
  
    return Arr1.join(''); 
  }