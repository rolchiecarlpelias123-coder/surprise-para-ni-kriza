const colors = [
  "#f5a7c4",
  "#e9b8d0",
  "#f7c98b",
  "#c6d9bd",
  "#d9c7f1",
  "#fff0f5"
];

let partyStarted = false;
let balloonTimer = null;
let heartTimer = null;

/* CREATE FLOATING BALLOONS */

function createBalloon() {
  const balloonWrapper = document.createElement("div");
  balloonWrapper.className = "floating";

  const balloon = document.createElement("div");
  balloon.className = "balloon";

  const color =
    colors[Math.floor(Math.random() * colors.length)];

  balloon.style.setProperty("--balloon", color);

  balloonWrapper.style.left = Math.random() * 100 + "vw";

  balloonWrapper.style.setProperty(
    "--duration",
    11 + Math.random() * 9 + "s"
  );

  balloonWrapper.style.transform =
    "scale(" + (0.7 + Math.random() * 0.7) + ")";

  balloonWrapper.appendChild(balloon);
  document.body.appendChild(balloonWrapper);

  setTimeout(() => balloonWrapper.remove(), 21000);
}

/* CREATE FLOATING HEARTS */

function createHeart() {
  const heart = document.createElement("div");

  heart.className = "heart-float";

  heart.textContent = [
    "♡",
    "♥",
    "✧",
    "💕"
  ][Math.floor(Math.random() * 4)];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize =
    16 + Math.random() * 20 + "px";

  heart.style.setProperty(
    "--duration",
    7 + Math.random() * 6 + "s"
  );

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 14000);
}

/* START THE BIRTHDAY CELEBRATION */

function startParty() {
  if (partyStarted) return;

  partyStarted = true;

  for (let i = 0; i < 12; i++) {
    setTimeout(createBalloon, i * 250);
  }

  balloonTimer = setInterval(createBalloon, 1500);
  heartTimer = setInterval(createHeart, 850);
}

/* CONFETTI CELEBRATION */

function confettiBurst() {
  for (let i = 0; i < 95; i++) {
    const piece = document.createElement("i");

    piece.className = "confetti";

    piece.style.left = Math.random() * 100 + "vw";

    piece.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.animationDelay =
      Math.random() * 0.8 + "s";

    piece.style.transform =
      "rotate(" + Math.random() * 360 + "deg)";

    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 5000);
  }
}

/* OPEN THE BIRTHDAY SURPRISE */

document.getElementById("openBtn").addEventListener("click", () => {
  startParty();
  confettiBurst();

  document.getElementById("message").scrollIntoView({
    behavior: "smooth"
  });
});

/* MAKE A BIRTHDAY WISH */

document.getElementById("wishBtn").addEventListener("click", () => {
  const wishText = document.getElementById("wishText");

  wishText.textContent =
    "Your wish has been sent into the universe. ✨ " +
    "May something beautiful find its way to you this year. " +
    "Keep believing in good things, birthday girl. ♡";

  confettiBurst();
});

/* REVEAL THE FINAL SECRET MESSAGE */

document.getElementById("secretBtn").addEventListener("click", () => {
  const message = document.getElementById("secretMessage");

  message.classList.toggle("show");

  if (message.classList.contains("show")) {
    confettiBurst();
    startParty();

    message.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
});