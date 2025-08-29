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
let service_arr = [];
let number_arr = [];
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
      service_arr.push(service);

      console.log(service_arr);
      for (let i = 0; i > service_arr.length; i++) {
        document.getElementById("coin").innerText = coin;
        number_arr.push(number);
        // add history
        const history = document.getElementById("history");
        const newDiv1 = document.createElement("div");
        const newDiv2 = document.createElement("div");
        const newDiv3 = document.createElement("div");
        const newH3 = document.createElement("h3");
        const newp1 = document.createElement("p");
        const newp2 = document.createElement("p");
        newDiv1.classList.add("p-3", "flex", "items-center", "justify-between");

        newH3.classList.add("text-lg", "text-black", "font-semibold");
        newH3.innerText = service_arr[i];
        newp1.classList.add("text-gray-500", "mb-1");
        newp1.innerText = number_arr[i];

        let now = new Date();
        let hours = now.getHours(); // 0-23
        let minutes = now.getMinutes(); // 0-59
        let seconds = now.getSeconds(); // 0-59

        let time = `${hours}:${minutes}:${seconds}` + " " + "AM";
        newp2.innerText = time;

        newDiv2.appendChild(newH3);
        newDiv2.appendChild(newp1);
        newDiv3.appendChild(newp2);
        newDiv1.appendChild(newDiv2);
        newDiv1.appendChild(newDiv3);
        history.appendChild(newDiv1);
        //   console.log(newDiv2);
        console.log(history);
      }
    } else {
      alert("❌" + " " + "You need at least 20 coins to make a call.");
    }
  });
}
