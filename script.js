const buttons = document.querySelectorAll(".footer__button");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";

    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
      window.open(e.target.href, "_blank");
    }, 600);
  });
});
