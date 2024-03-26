let count = 1;

const counter = document.getElementById("counter");
renderCount();

const buttons = document.getElementsByClassName("button");
const no = buttons[1];
const yes = buttons[4];

no.addEventListener("click", () => {
  location.reload();
});

yes.addEventListener("click", () => {
  count++;
  if (count <= 5) return renderCount();
  window.location.href = "https://www.netflix.com/watch/81450505?t=2324";
});

function renderCount() {
  counter.innerHTML = `${count} of 5`;
}
