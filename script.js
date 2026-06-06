document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");

  function handleScroll() {
    if (!header) return;
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  document.querySelectorAll(".reveal").forEach(function (el) {
    el.classList.add("revealed");
  });

  const progressBar = document.getElementById("scrollProgress");

  function updateProgress() {
    if (!progressBar) return;
    const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percent = total > 0 ? (window.scrollY / total) * 100 : 0;
    progressBar.style.width = percent + "%";
  }

  window.addEventListener("scroll", updateProgress);
  updateProgress();

  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", function () {
      navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
      });
    });
  }
});
