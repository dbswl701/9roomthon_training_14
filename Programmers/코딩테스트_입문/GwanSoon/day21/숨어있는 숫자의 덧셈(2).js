function solution(my_string) {
    let sum = 0;
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i].match(/[0-9]/)) {
            let num = my_string[i];
            while (i + 1 < my_string.length && my_string[i + 1].match(/[0-9]/)) {
                num += my_string[i + 1];
                i++;
            }
            sum += Number(num);
        }
    }
    return sum;
}