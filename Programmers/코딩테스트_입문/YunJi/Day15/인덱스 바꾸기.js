function solution(my_string, num1, num2) {
  const num1_char = my_string[num1];
  const num2_char = my_string[num2];
  
  return [...my_string].map((v, idx) => {
      if (idx === num1) return num2_char;
      if (idx === num2) return num1_char;
      return v;
  }).join('');
}