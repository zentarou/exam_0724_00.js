var scope = "globall";
function f () {
     scope = "globall";
    console.log(scope);
}
f()
console.log(scope);
