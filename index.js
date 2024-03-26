let count = 1;
const choices = [
  [4, 1],
  [0, 5],
  //looking at the position Will clicked, probably a 3
  [2, 4],
  [1, 3],
  [5, 0],
];

const counter = document.getElementById("counter");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
render();

const buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const choice = choices[count - 1];
    if (choice[0] == i) {
      count++;
      if (count <= 5) return render();
      window.location.href = "https://www.netflix.com/watch/81450505?t=2324";
    }
    if (choice[1] == i) {
      location.reload();
    }
  });
}

function render() {
  counter.innerHTML = `${count} of 5`;
  yes.innerHTML = choices[count - 1][0] + 1;
  no.innerHTML = choices[count - 1][1] + 1;
}
