const miasta = {
  "Stargard": {
    title: "Naprawa Pralek Stargard | Serwis AGD",
    description: "Naprawa pralek w Stargardzie – pralka nie pobiera wody, nie wiruje, hałasuje? Szybki serwis AGD z dojazdem.",
    keywords: "naprawa pralek Stargard, pralka nie wiruje, pralka nie pobiera wody, serwis AGD Stargard",
    heading: "Naprawa Pralek Stargard",
    subheading: "Profesjonalny serwis AGD – pralka nie działa? Zadzwoń!",
    footer: "© 2025 Serwis AGD Stargard | Naprawa pralek i zmywarek",
    problems: [
      "Pralka nie pobiera wody",
      "Pralka nie wiruje",
      "Pralka hałasuje przy wirowaniu",
      "Pralka nie odprowadza wody",
      "Pralka zatrzymuje się w połowie cyklu",
      "Pralka pokazuje błąd E21 / F02"
    ]
  }
  // Добавь другие города по аналогии
};

const urlParams = new URLSearchParams(window.location.search);
const city = urlParams.get("city") || "Stargard";
const data = miasta[city];

document.title = data.title;
document.getElementById("meta-description").setAttribute("content", data.description);
document.getElementById("meta-keywords").setAttribute("content", data.keywords);
document.getElementById("main-heading").textContent = data.heading;
document.getElementById("sub-heading").textContent = data.subheading;
document.getElementById("city-input").value = city;
document.getElementById("footer-text").textContent = data.footer;

const ul = document.getElementById("problem-list");
data.problems.forEach(problem => {
  const li = document.createElement("li");
  li.textContent = problem;
  ul.appendChild(li);
});
