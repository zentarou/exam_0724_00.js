try {
    var year = parseInt("2017",10) +3;
    console.log("オリンピックは"+year+"年です");
} catch(e) {
    console.log(e.massage);
} finally {
    console.log('最後の実行');

}