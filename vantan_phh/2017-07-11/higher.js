let ary = [1, 2, 4, 8, 16, 32, 4, 14, 56, 5, 3, 92, 45, 65, -3, -7, 0];
// その1: sort メソッドを利用して数値として昇順になるようにしなさい
function numersort(a,b) {
return a-b;
}
console.log(ary.sort(nmersort));

// その2: sort メソッドを利用して数値として降順になるようにしなさい
function reverse(a,b)
a = a,toString();
b = b,toString();
if(a < b) {
    return 1;
}
if(a > b) {
    return -1;
}
return0;
console.log(ary.sort(reverse))

// その3: sort メソッドを利用して文字列(辞書順)で降順になるようにしなさい
// その4: Array のメソッドを使って配列の要素に文字列があるかどうかを判定する処理を書きなさい(配列の内容を適当に追加すること)
let ary_with,string= [1, 2, 4, 8, 16, 32, 4, 14, 56, 5, 3, 92, 45, 65, -3, -7, 0];
function isString(ob){
    var tyoe = typeof obj;
    if(type === 'string') {
        return true;
    }
    return false;
}
if(ary.num(toString)) {
    console.log
}
if(ary_with_string) {
    console.log(ary_with_string);
}
// その5: Array のメソッドを使って配列の要素の中に出てくる最初の関数を取得して console.log で確認しなさい(配列の内容を適当に追加すること)
let ary_with_function= [1, 2, 4, 8, 16, 32, 4, 14, 56, 5, 3, 92, 45, 65, -3, -7, 0];
function isFunction(obj) {
    return typeof obj === 'function';
}
let first_function = str_with_function.find(isfunction);
console.log(first_function)