function OnButtonClick() {
  document.getElementById("zeitaku").innerHTML = "贅沢な名だね。";
  var target = document.getElementById("adana");
  var adana = shuffle(document.form.text.value);
  var message = `今からお前の名前は${adana}だ。いいかい、${adana}だよ。分かったら返事をするんだ、${adana}！`;
  target.innerHTML = message;
}

function shuffle(str) {
  var a = str.split("");
  n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a[0];
}
