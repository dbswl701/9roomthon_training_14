function solution(my_string) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  
  return [...my_string].filter(str => vowel.indexOf(str) === -1).join('');;
}