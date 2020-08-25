const powerCalculator = function (base, expo) {
    if (expo < 0) {
        return (console.log('exponent should be >= 0'))
    }
    if (expo === 0) {
        return 1
    }
    return base * powerCalculator(base, expo - 1)
}

console.log(powerCalculator(10, 0))
console.log(powerCalculator(10, 1))
console.log(powerCalculator(10, 2))
console.log(powerCalculator(10, -1))
