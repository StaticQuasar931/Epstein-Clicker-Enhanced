(function() {
  function tick() {
    var score = document.getElementById("score");
    if (!score) return;
    var value = score.textContent || "0.0";
    var nodes = document.querySelectorAll(".tickerScore");
    nodes.forEach(function(node) {
      node.textContent = value;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", tick);
  } else {
    tick();
  }

  setInterval(tick, 200);
})();
