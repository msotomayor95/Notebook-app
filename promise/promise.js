let calcular = (n, m) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let r = n + m;
            if (r < 20) {
                res(r);
            } else {
                rej('Te pasaste.');
            }
        }, 2000);
    });
}

module.exports = {
    calcular
};