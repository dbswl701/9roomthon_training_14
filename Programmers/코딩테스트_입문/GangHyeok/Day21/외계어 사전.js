function solution(spell, dic) {
  var answer = 2;
  
  // dic.forEach(x=>answer+=)
  dic.forEach(x=>{
      console.log(x.split(/[spell.join('')]/).filter(x=>x))
      
      let chk = 0;
      spell.forEach(y=>{            
          if(x.indexOf(y)==-1 || x.indexOf(y)!=x.lastIndexOf(y)){
              chk = 1;
          }
      })
      if(chk==0) answer = 1;
  })
  
  return answer;
}