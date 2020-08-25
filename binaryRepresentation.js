const binaryRep = function(n) {
    if(n === 0) return '0'
    if(n === 1) return '1'
    if (n % 2 === 0) {
      return binaryRep(Math.floor(n/2)) + '0' 
    }
    else return binaryRep(Math.floor(n/2)) + '1'
  }
  
  console.log(binaryRep(3))
  console.log(binaryRep(25))