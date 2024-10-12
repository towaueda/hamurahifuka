document.addEventListener("DOMContentLoaded", function () {
  const campaignButton = document.querySelector(".campaign-button");
  const stickyTrigger = document.querySelector(".sticky-trigger"); // Add a trigger element

  window.addEventListener("scroll", function () {
    const triggerPosition = stickyTrigger.getBoundingClientRect().top;

    if (triggerPosition < window.innerHeight) {
      campaignButton.classList.add("sticky");
    } else {
      campaignButton.classList.remove("sticky");
    }
  });
});
