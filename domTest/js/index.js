


var li = document.getElementsByTagName("li");
var imgPre = document.querySelector("img");
for (var i = 0; i < li.length; i++) {
    (function (i) {
        li[i].onmouseover = function () {
            imgPre.src = li[i].getAttribute("data-img");
        }
    })(i)
}