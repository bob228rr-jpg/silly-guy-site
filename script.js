const phrases = [
  "seriousness has left the chat.",
  "the chart is confused, but i am smiling.",
  "no perfect logic. only $SILLY.",
  "today we laugh first and explain later.",
  "the internet is fun again.",
  "tiny coin. huge nonsense.",
  "stay silly. stay together."
];

const phraseButton = document.querySelector(".phrase-card");
const phrase = document.querySelector("#phrase");
const portrait = document.querySelector(".portrait-wrap");
const spinButton = document.querySelector(".spin-button");

let phraseIndex = 0;

phraseButton.addEventListener("click", () => {
  phraseIndex = (phraseIndex + 1) % phrases.length;
  phrase.textContent = phrases[phraseIndex];
});

spinButton.addEventListener("click", () => {
  portrait.classList.remove("is-spinning");
  void portrait.offsetWidth;
  portrait.classList.add("is-spinning");
});
