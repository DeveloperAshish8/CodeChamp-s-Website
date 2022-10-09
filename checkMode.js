window.addEventListener("load", () => {
  let mode = localStorage.getItem("mode");
  if (!mode) {
    localStorage.setItem("mode", "light");
    mode = "light";
  }
  if (mode === "light") {
      document.getElementById("Navbar").classList.remove("dark-nav");
      document.getElementById("Navbar").classList.add("bg-white");
    document.getElementById("toggle-switch").style.backgroundColor = "white";
    document.getElementById("toggle-switch").style.borderColor = "black";
    var elementAnchor = document.getElementsByClassName("dark-anchor");
    for (var i = 0; i < elementAnchor.length; i++) {
      elementAnchor[i].classList.remove("dark-anchor-tag");
    }
    var elementCard = document.getElementsByClassName("card-body");
    for (var i = 0; i < elementCard.length; i++) {
      elementCard[i].classList.remove("dark-card");
    }
    var companyName = document.getElementsByClassName("company-name");
    for (var i = 0; i < companyName.length; i++) {
      companyName[i].classList.remove("dark-name");
    }
    document.body.classList.remove("dark-mode");
  } else {
      document.getElementById("Navbar").classList.remove("bg-white");
    document.getElementById("Navbar").classList.add("dark-nav");
    document.getElementById("toggle-switch").style.backgroundColor = "black";
    document.getElementById("toggle-switch").style.borderColor = "white";
    var elementAnchor = document.getElementsByClassName("dark-anchor");
    for (var i = 0; i < elementAnchor.length; i++) {
      elementAnchor[i].classList.add("dark-anchor-tag");
    }
    var elementCard = document.getElementsByClassName("card-body");
    for (var i = 0; i < elementCard.length; i++) {
      elementCard[i].classList.add("dark-card");
    }
    var companyName = document.getElementsByClassName("company-name");
    for (var i = 0; i < companyName.length; i++) {
      companyName[i].classList.add("dark-name");
    }
    document.body.classList.add("dark-mode");
  }
});
