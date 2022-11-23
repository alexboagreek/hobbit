let c = 0, d = 0;
c = 5 + + + 5;
d = 5+ + +5;
console.log(c === d);


function isAdmin(userId) {
    if (userId === 10) {
        return true;
    } else {
        return isAdmin(10);
    }
}
isAdmin(5);

function start() {
    return 'start';
}
function run() {
    return start() + ' finish ' + start();
}
run();