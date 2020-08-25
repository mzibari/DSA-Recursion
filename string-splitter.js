//this is the best I was able to do

const stringSplitter = function(str, separator) {
    let newStr =''
    for(let i=0; i < str.length; i++){
      if(str.charAt(i) === separator){
        newStr = newStr + ' '
      }
      else newStr = newStr + str.charAt(i)
    }
    return newStr
  }
  
  console.log(stringSplitter("123/456/yoyo", '/'))