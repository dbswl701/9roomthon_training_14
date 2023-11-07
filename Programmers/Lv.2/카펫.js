function solution(brown, yellow) {
    var answer = [];
    let CarpetSize = brown + yellow
    
    for ( let height = 3; height <= brown; height++) {
        if ( CarpetSize % height == 0 ) {
            let width = CarpetSize / height;
        
        
        if ( (width-2) * (height-2) == yellow ){
            return [width, height];
        }
        }
    }
    return answer;
}

//생각하기
//1. 브라운 격자가 감싸고있는 옐로우 격자이므로, 두 격자를 합치면 카펫의 크기가 된다. 
//2. 그런데 옐로우 격자가 1개 이상일때 무조건, 브라운격자의 height는 3개 이상이여야한다. ( 높이 3 이상으로 고정된다 )
//3. 그런데, 가로길이는 세로길이랑 같거나, 세로길이보다 무조건 길어야한다고 판정나있음. 그럼 ( width 역시 3이상으로 한정되어진다.
//4. width * height = CarpetSize인데, 만약 width < height가 아니라면 그냥 패스시켜야한다.
//5. 그리고 yellow의 전체면적은 brown에서 가로 - 2 / 세로 - 2 하면 된다 ( 맞닿아 있는 선분의 길이라고 생각하면 됨 )