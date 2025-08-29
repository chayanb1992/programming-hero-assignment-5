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
