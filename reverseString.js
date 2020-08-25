const reverseString = function (str) {
    if (str.length === 1) {
        return (str[0])
    }
    return str[str.length - 1] + reverseString(str.substring(0, str.length - 1))
}

console.log(reverseString('Mahmood'))