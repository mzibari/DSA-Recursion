const jumpingSheep = function (sheep) {
    if (sheep === 0) {
        return console.log('All sheep jumped over the fence')
    }
    console.log(`${sheep}: Another sheep jumps over the fence`)
    return jumpingSheep(sheep - 1)
}
let x = 3
jumpingSheep(x)