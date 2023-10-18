function solution(phone_number) {
  return [...phone_number].map((v, idx) => idx < phone_number.length-4 ? '*' : v).join('');
}