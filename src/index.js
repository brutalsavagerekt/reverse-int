module.exports = function reverse(n) {
    // convert to sting and reverse
    let output = n.toString().split('').reverse().join('');

    return parseInt(output)


}
