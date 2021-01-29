let items = ["Hello Everybody!", "Good Bye!"];
for (let i = 0; i < items.length; i++) {
  const p = document.createElement("p");
  const text = document.createTextNode(`${items[i]}`);
  document.body.appendChild(p).appendChild(text);
}
