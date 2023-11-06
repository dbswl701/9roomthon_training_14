function solution(a, b) {
  let answer = '';
  let sum = 0;
  switch(a) {
      case(12): { sum += 30 }
      case(11): { sum += 31 }
      case(10): { sum += 30 }
      case(9): { sum += 31 }
      case(8): { sum += 31 }
      case(7): { sum += 30 }
      case(6): { sum += 31 }
      case(5): { sum += 30 }
      case(4): { sum += 31 }
      case(3): { sum += 29 }
      case(2): { sum += 31 }
  }
  sum += b;

  switch(sum % 7) {
      case(0): { 
          answer = 'THU'
          break;
      }  
      case(1): {
          answer = 'FRI'
          break;
      }  
      case(2): {
          answer = 'SAT'
          break;
      }  
      case(3): {
          answer = 'SUN'
          break;
      }  
      case(4): {
          answer = 'MON'
          break;
      }  
      case(5): {
          answer = 'TUE'
          break;
      }  
      case(6): {
          answer = 'WED'
          break;
      }  
  }
  return answer;
}