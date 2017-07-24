window.addEventListener('load', function() {
    var resultField = document.getElementById('result');
    var btn = document.getElementById('fortune');
    //resultField.innerHTML = '書き換えた!';
    btn.addEventListener('click',function() {
        var result = '';
        var num = Math.floor(Math.random() * 7);
        var list =['大吉', '中吉', '小吉', '吉', '中吉', '凶', '大凶'];
        var result = list[num];
        //switch(num){
           // case 0:
              //  result = '大吉';
               // break;
            //case 1:
             //   result = '中吉';
              //  break;
            //case 2:
              //  result = '小吉';
               // break;
            //case 3:
              //  result = '吉';
               // break;
            //case 4:
               // result = '中吉';
               // break;
            //case 5:
                //result = '凶';
            //case 6:
                 //result='大凶';
                // break;
        resultField.innerHTML = '占いの結果:' + result;
    })
});