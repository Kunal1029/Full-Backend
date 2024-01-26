let h = [['a', 'b'], ['c', 'd', 'w']];

for (let i = 0; i < h.length; i++) {
    for (let j = 0; j <= h[i].length - 1; j++) {
        h[i][j] = h[i][h[i].length - 1];
        console.log(h[i][j]);
    }
}

console.log(h);
