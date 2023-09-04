function solution(emergency) {
  const copiedEmergency = [...emergency].sort((a ,b) => b - a);
  let rankArr = new Array(emergency.length).fill(0);
  let count = 1;
  for (let i = 0; i < emergency.length; i++){
      let index = emergency.indexOf(copiedEmergency[i]);
      
      rankArr.splice(index, 1, count);
      
      count++;
  }
  return rankArr;
}