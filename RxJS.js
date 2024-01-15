document.addEventListener("DOMContentLoaded", function () {
  const { fromEvent, scan } = rxjs;
  const clickedBtn = document.querySelectorAll(".square");



  clickedBtn.forEach((btn) => {
    fromEvent(btn, "click")
      .pipe(scan((count) => count + 1, 0))
      .subscribe((count) => {
        console.log(`clicked ${count} times`);
        btn.style.backgroundColor =
          btn.style.backgroundColor === "green" ? "" : "green";
      });
  });
});
