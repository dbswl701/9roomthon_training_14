function solution(arr, k) {
    const minusArr = Array(k).fill(-1)
    const noneDup = arr.filter((a, i) => arr.indexOf(a) === i)
    minusArr.splice(0, noneDup.length, ...noneDup)
    return minusArr.slice(0, k)
}


g