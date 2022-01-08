module.exports = function reverse (n) {
    if (n >  0) {
        let newN = n.toString().split('').reverse().join('');
        return newN;
    } else {
        n = Math.abs(n);
        let newN = n.toString().split('').reverse().join('');
        return newN;
    }
}
