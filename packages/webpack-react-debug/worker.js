console.log(this);
addEventListener("message", function (evt) {
  console.log("addEventListener,message", evt);
  let total = 0;
  let num = evt.data;
  for (let i = 0; i < num; i++) {
    total += i;
  }
  postMessage(total);
});
