export let fn = (asia, europe, americas) => {
  // Aisa filter
  if (asia === true) {
    document.querySelectorAll(".亞洲").forEach((e) => {
      e.style.display = "inline-block";
    });
  } else {
    document.querySelectorAll(".亞洲").forEach((e) => {
      e.style.display = "none";
    });
  }

  // Europe filter
  if (europe === true) {
    document.querySelectorAll(".歐洲").forEach((e) => {
      e.style.display = "inline-block";
    });
  } else {
    document.querySelectorAll(".歐洲").forEach((e) => {
      e.style.display = "none";
    });
  }

  // Americas filter
  if (americas === true) {
    document.querySelectorAll(".美洲").forEach((e) => {
      e.style.display = "inline-block";
    });
  } else {
    document.querySelectorAll(".美洲").forEach((e) => {
      e.style.display = "none";
    });
  }
};
