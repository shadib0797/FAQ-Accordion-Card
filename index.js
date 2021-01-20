for (let i = 0; i < document.querySelectorAll(".accordian-header").length; i++) {
  document.querySelectorAll(".accordian-header")[i].addEventListener("click", function() {

    const currentlyActiveHeader = document.querySelector(".accordian-header.active");
    if (currentlyActiveHeader && currentlyActiveHeader !== this) {
      currentlyActiveHeader.classList.remove("active");
      currentlyActiveHeader.nextElementSibling.style.display = "none";
    }
    this.classList.toggle("active");
  });
}
