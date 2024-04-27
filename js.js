

document.addEventListener("DOMContentLoaded", function() {
    const sortBtn = document.querySelector(".sort-btn");
  
    sortBtn.addEventListener("mouseover", function() {
      sortBtn.style.backgroundColor = "white";
      sortBtn.style.color = "black";
    });
  
    sortBtn.addEventListener("mouseout", function() {
      sortBtn.style.backgroundColor = "black";
      sortBtn.style.color = "white";
    });
  });