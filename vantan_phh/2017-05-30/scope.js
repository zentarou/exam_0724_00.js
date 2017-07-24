var globalVar ="global";
function scope (ste) {
    var localVar = "local";
    console.log(globalVar);
    console.log(localVar);
}

scope();
globalVar = "new global";
scope();