var obj = {
    name :"Ayataka"
};
function f (x) {
    x = {};
    x.name ="Ayataka"
};
f(obj);
console.log(obj);