"use strict";

window.addEventListener("click", function () {
  let aiAssistant = document.getElementById("ai-assistant");
  aiAssistant.style.backgroundColor = "#22bf99";
  aiAssistant.classList.add("jump");

  setTimeout(function () {
    aiAssistant.style.backgroundColor = "";
    aiAssistant.classList.remove("jump");
  }, 10000);
});

document.addEventListener("DOMContentLoaded", function () {
  const slabs = document.querySelectorAll(
    ".behind-slab, .center-slab, .front-slab"
  );

  slabs.forEach((slab) => {
    slab.style.display = "none";
  });
});

window.addEventListener("click", function () {
  const slabs = document.querySelectorAll(
    ".behind-slab, .center-slab, .front-slab"
  );

  slabs.forEach((slab) => {
    slab.classList.add("transition-effect");
    slab.style.display = "flex";
  });

  setTimeout(function () {
    slabs.forEach((slab) => {
      slab.style.display = "none";
    });
  }, 6000);
});

const calendar = document.getElementById("calendar");
const hoverText = document.getElementById("hover-text");
const jokeElement = document.getElementById("joke-el");
const clock = document.getElementById("clock");
const googleSearch = document.getElementById("googleSearch");
const weatherCheck = document.getElementById("weatherCheck");
const inspiration = document.getElementById("inspiration");

const overLay = document.getElementById("overlay-container");
overLay.style.display = "none";

function funDate() {
  const overLayText = document.getElementById("overlayText");
  const allContainer = document.getElementById("allContainer");
  allContainer.style.zIndex = "0";
  overLay.style.display = "flex";
  const currentDate = new Date();
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-GB", options);
  overLayText.textContent = `A calendar is a great investment you know; I mean, your computer even has one! Since you asked, today is ${formattedDate}.`;
}

calendar.addEventListener("mouseover", function () {
  hoverText.style.color = "white";
  hoverText.innerText = `Hey Felix, what's today?`;
});

calendar.addEventListener("mouseout", function () {
  hoverText.innerText = "";
});

function exitOverlay() {
  overLay.style.display = "none";
}

function jokeExecute() {
  const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why did the web developer go broke? Because he lost his cache.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "Why do programmers prefer iOS development? Because there are no Java exceptions.",
    "Why did the computer go to the doctor? It had a virus!",
    "Why did the developer go broke? Because he lost his domain in a bet.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the programmer go broke? Because he couldn't find a class that matched.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "Why was the computer cold? It left its Windows open.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "Why did the developer go broke? Because he lost his domain in a bet.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the programmer go broke? Because he couldn't find a class that matched.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "Why was the computer cold? It left its Windows open.",
    "Why was the JavaScript developer sad? Because he didn't get a callback.",
    "Why did the programmer go broke? Because he lost his domain in a bet.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "Why did the developer go broke? Because he lost his domain in a bet.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the programmer go broke? Because he couldn't find a class that matched.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "Why was the computer cold? It left its Windows open.",
    "Why was the JavaScript developer sad? Because he didn't get a callback.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why did the web developer go broke? Because he lost his cache.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "Why did the computer go to the doctor? It had a virus!",
    "Why did the developer go broke? Because he lost his domain in a bet.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the programmer go broke? Because he couldn't find a class that matched.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "Why was the computer cold? It left its Windows open.",
    "Why was the JavaScript developer sad? Because he didn't get a callback.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the programmer go broke? Because he couldn't find a class that matched.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "Why was the computer cold? It left its Windows open.",
  ];

  const overLayText = document.getElementById("overlayText");
  const randomIndex = Math.floor(Math.random() * jokes.length);
  allContainer.style.zIndex = "0";
  overLay.style.display = "flex";
  overLayText.textContent = jokes[randomIndex];
}

jokeElement.addEventListener("mouseover", function () {
  hoverText.style.color = "white";
  hoverText.innerText = `Hey Felix, tell me a joke.`;
});

jokeElement.addEventListener("mouseout", function () {
  hoverText.innerText = "";
});

const overLayText = document.getElementById("overlayText");
function clockFun() {
  const overLayText = document.getElementById("overlayText");
  var date = new Date();
  var currentTime = date.getHours() + ":" + date.getMinutes();
  allContainer.style.zIndex = "0";
  overLay.style.display = "flex";

  overLayText.textContent = `Perhaps it's time for you to get a watch? I'm just kidding... No. Really... It's ${currentTime}.`;
}

clock.addEventListener("mouseover", function () {
  hoverText.style.color = "white";
  hoverText.innerText = `Hey Felix, what time is it?`;
});

clock.addEventListener("mouseout", function () {
  hoverText.innerText = "";
});

function weatherFun() {
  allContainer.style.zIndex = "0";
  overLay.style.display = "flex";

  overLayText.textContent = `The weather really just kind of sucks here, and I know you wanted the weather at your Location, but that's life for you.`;
}

weatherCheck.addEventListener("mouseover", function () {
  hoverText.style.color = "white";
  hoverText.innerText = `Hey Felix, how's the weather?`;
});

weatherCheck.addEventListener("mouseout", function () {
  hoverText.innerText = "";
});

function redirection() {
  window.open("https://www.google.com", "_blank");
}

googleSearch.addEventListener("mouseover", function () {
  hoverText.style.color = "white";
  hoverText.innerText = `Hey Felix...`;
});

googleSearch.addEventListener("mouseout", function () {
  hoverText.innerText = "";
});

function redirectionAnother() {
  window.open("https://dribbble.com/shots/5473987-AI-Robot", "_blank");
}

inspiration.addEventListener("mouseover", function () {
  hoverText.style.color = "white";
  hoverText.innerText = `Hey Felix, what inspires you?`;
});

inspiration.addEventListener("mouseout", function () {
  hoverText.innerText = "";
});
