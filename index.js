document.addEventListener("DOMContentLoaded", function () {
    var resultsControl = document.getElementById("results");

    var minCount = 1; //表記したい値の範囲を設定
    var maxCount = 20; //表記したい値の範囲を設定

    for (let i = minCount; i <= maxCount; i++) {
        var result;

        if (i % 3 == 0 && i % 5 == 0) {
            result = "FizzBuzz";
        } else if (i % 3 == 0) {
            result = "Fizz";
        } else if (i % 5 == 0) {
            result = "Buzz";
        } else {
            result = i;
        }

        if (i == maxCount) { //最大値のみコンマ不要とする
            var span = document.createElement("span");
            span.textContent = result;
            resultsControl.appendChild(span);
        } else { //最大値以外の表記
            var span = document.createElement("span");
            span.textContent = result + " , ";
            resultsControl.appendChild(span);
        }

        if (i % 10 == 0) { //10毎に改行
            var br = document.createElement("br");
            resultsControl.appendChild(br);
        }
    }
});
