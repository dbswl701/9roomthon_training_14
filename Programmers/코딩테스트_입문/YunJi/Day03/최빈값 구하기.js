function solution(array) {
  const dic = {}
  for (let i of array) {
      // console.log(i)
      if (i in dic) {
          dic[i] += 1
      } else {
          dic[i] = 1
      }
  }
  console.log(dic)
  
  let max = 0
  let num = -1
  // dic 돌면서 제일 큰 값 찾기. 여러개면 -1
  for (let key of Object.keys(dic)) {
      console.log(key, dic[key]);
      if (max < dic[key]) {
          max = dic[key]
          num = key
      }
  }
  console.log('--------')
  // 여러개면 -1
  for (let key of Object.keys(dic)) {
      console.log(key, dic[key]);
      if (max === dic[key] && num !== key) {
          num = -1
          break
      }
  }
  // 최빈값이 아닌 최빈값의 갯수를 반환했어서 틀림

  return parseInt(num);
}