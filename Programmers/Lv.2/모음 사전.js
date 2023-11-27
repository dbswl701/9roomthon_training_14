function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;
    const base = [781, 156, 31, 6, 1]; // 각 자리에 대한 기본값

    for (let i = 0; i < word.length; i++) {
        let index = vowels.indexOf(word[i]);
        answer += index * base[i] + 1; // 각 알파벳 위치에 대한 계산
    }

    return answer;
}