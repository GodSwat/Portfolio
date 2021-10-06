let items = document.querySelectorAll(".socials-item-icon"),
  self = this;
items.forEach((item, index) => {
  item.addEventListener("mousemove", mouseMove);
  item.addEventListener("mouseleave", mouseLeave);
});

function mouseMove(e) {
  let target = e.target.closest("a"),
    targetData = target.getBoundingClientRect(),
    targetIcon = target.querySelector("i"),
    offset = {
      x: ((e.pageX - (targetData.left + targetData.width / 2)) / 4) * -1,
      y: ((e.pageY - (targetData.top + targetData.height / 2)) / 4) * -1
    };
  target.style.transform =
    "translate(" + offset.x + "px," + offset.y + "px) scale(" + 1.1 + ")";
  target.style.webkitTransform =
    "translate(" + offset.x + "px," + offset.y + "px) scale(" + 1.1 + ")";
  document.querySelectorAll(".socials-item-icon").forEach((e) => {
    if (e !== target) {
      e.style.transform =
        "translate(" +
        offset.x / 2 +
        "px, " +
        offset.y / 2 +
        "px) scale(" +
        0.9 +
        ")";
      e.style.webkitTransform =
        "translate(" +
        offset.x / 2 +
        "px, " +
        offset.y / 2 +
        "px) scale(" +
        0.9 +
        ")";
    }
  });
  targetIcon.style.transform =
    "translate(" + offset.x + "px," + offset.y + "px) scale(" + 1.1 + ")";
  targetIcon.style.webkitTransform =
    "translate(" + offset.x + "px," + offset.y + "px) scale(" + 1.1 + ")";
}

function mouseLeave(e) {
  document.querySelectorAll(".socials-item-icon").forEach((target) => {
    let targetIcon = target.querySelector("i");
    target.style.transform = "translate(0px,0px) scale(1)";
    target.style.webkitTransform = "translate(0px,0px) scale(1)";
    targetIcon.style.transform = "translate(0px,0px) scale(1)";
    targetIcon.style.webkitTransform = "translate(0px,0px) scale(1)";
  });
}
