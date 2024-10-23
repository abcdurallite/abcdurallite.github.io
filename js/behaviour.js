
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainers = document.querySelectorAll(".scroll-container");

  scrollContainers.forEach((scrollContainer) => {
    let isDragging = false;
    let startX, startY, scrollLeft, scrollTop;

    scrollContainer.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      startY = e.pageY - scrollContainer.offsetTop;
      scrollLeft = scrollContainer.scrollLeft;
      scrollTop = scrollContainer.scrollTop;
      scrollContainer.style.cursor =
        "grabbing"; /* Change cursor while dragging */
    });

    scrollContainer.addEventListener("mouseleave", () => {
      isDragging = false;
      scrollContainer.style.cursor =
        "grab"; /* Revert cursor when not dragging */
    });

    scrollContainer.addEventListener("mouseup", () => {
      isDragging = false;
      scrollContainer.style.cursor =
        "grab"; /* Revert cursor when not dragging */
    });

    scrollContainer.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const y = e.pageY - scrollContainer.offsetTop;
      const walkX = (x - startX) * 3; // The * 3 factor is for increasing the scroll speed
      const walkY = (y - startY) * 3; // The * 3 factor is for increasing the scroll speed
      scrollContainer.scrollLeft = scrollLeft - walkX;
      scrollContainer.scrollTop = scrollTop - walkY;
    });
  });
});
