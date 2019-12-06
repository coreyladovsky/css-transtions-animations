document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", e => {
    let bike = document.querySelector("img");
    switch (e.key) {
      case " ":
        bike.classList.add("jump");
        setTimeout(() => {
          bike.classList.remove("jump");
        }, 500);
        break;
      case "w":
        bike.classList.add("wheely");
      default:
        break;
    }
  });

  document.addEventListener("keyup", e => {
    let bike = document.querySelector("img");
    if(e.key === "w") {
        bike.classList.remove("wheely")
    }
  });
});
