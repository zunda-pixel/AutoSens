var mouseX = 0
var mouseY = 0

var targetX = 0
var targetY = 0

window.onload = function () {
    //マウス移動時のイベントをBODYタグに登録する
    document.body.addEventListener("mousemove", function (e) {
        //座標を取得する
        mouseX = e.pageX; //X座標
        mouseY = e.pageY; //Y座標
    });
}
