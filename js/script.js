// heart click function
const hearts = document.getElementsByClassName("heart");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    let all_heart = parseInt(
      document.getElementById("reserve_heart").innerText
    );
    all_heart = all_heart + 1;
    document.getElementById("reserve_heart").innerText = all_heart;
  });
}

// call button acction
const call_buttons = document.getElementsByClassName("call");
console.log(call_buttons);
for (let call of call_buttons) {
  call.addEventListener("click", function (event) {
    const parent = event.target.parentNode.parentNode;
    const service = parent.getElementsByClassName("service")[0].innerText;
    let number = parent.getElementsByClassName("number")[0].innerText;
    // if (number.length > 3) {
    //   number = number.slice(0, 3);
    // }
    // use coin
    let coin = parseInt(document.getElementById("coin").innerText);
    if (coin >= 20) {
      coin = coin - 20;
      alert("📞" + " " + "Calling" + " " + service + " " + number + "\u2026");
      document.getElementById("coin").innerText = coin;
    } else {
      alert("❌" + " " + "You need at least 20 coins to make a call.");
    }
  });
}
