function sortStrings(strings, n) {
    // strings를 먼저 사전순으로 정렬
    strings.sort();
    
    // 그 다음 n번째 문자를 기준으로 정렬
    strings.sort(function(a, b) {
        if (a[n] > b[n]) return 1; // a의 n번째 문자가 b의 n번째 문자보다 뒤에 오면 a를 b보다 뒤로
        if (a[n] < b[n]) return -1; // a의 n번째 문자가 b의 n번째 문자보다 앞에 오면 a를 b보다 앞으로
        return 0; // 같으면 순서 변경 X
    });
    
    return strings;
}