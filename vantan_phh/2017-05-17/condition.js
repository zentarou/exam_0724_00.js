var airplane = {
    X: 100,
    y: 0,
    w: 100,
    h: 100,
};

var bullet = {
    x: 95,
    y: 0,
    w: 10,
    h: 10,
}

function overlap() {
    return (
       ( airplane.x <= bullet.x + bullet.w) &&
       ( airplene.x + airplene.w >= bullet.x) &&
       ( airplane.y <= bullet .y + bullet.h) &&
        (airplene.y +airplane.h>= bullet.y)
    );
}

console.log(overlap());
