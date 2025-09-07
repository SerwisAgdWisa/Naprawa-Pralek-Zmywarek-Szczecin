const miasta = {
  "Stargard": {
    title: "Naprawa Pralek Stargard | Serwis AGD",
    description: "Naprawa pralek w Stargardzie – szybki serwis AGD z dojazdem.",
    keywords: "naprawa pralek Stargard, pralka nie wiruje, serwis AGD Stargard",
    heading: "Naprawa Pralek Stargard",
    subheading: "Profesjonalny serwis AGD – pralka nie działa? Zadzwoń!",
    footer: "© 2025 Serwis AGD Stargard",
    problems: [
      "Pralka nie pobiera wody",
      "Pralka nie wiruje",
      "Pralka hałasuje",
      "Pralka nie odprowadza wody",
      "Pralka zatrzymuje się",
      "Pralka pokazuje błąd E21"
    ]
  },
  "Szczecin": {
    title: "Naprawa Pralek Szczecin | Serwis AGD",
    description: "Profesjonalna naprawa pralek w Szczecinie – ekspresowa pomoc.",
    keywords: "naprawa pralek Szczecin, serwis AGD Szczecin, pralka nie działa",
    heading: "Naprawa Pralek Szczecin",
    subheading: "Szybki serwis AGD w Szczecinie",
    footer: "© 2025 Serwis AGD Szczecin",
    problems: [
      "Pralka nie grzeje wody",
      "Pralka nie wiruje",
      "Pralka przecieka",
      "Pralka nie odpompowuje",
      "Pralka piszczy",
      "Pralka nie reaguje"
    ]
  },
  "Pyrzyce": {
    title: "Naprawa Pralek Pyrzyce | Serwis AGD",
    description: "Naprawa pralek w Pyrzycach – solidnie i z gwarancją.",
    keywords: "naprawa pralek Pyrzyce, serwis AGD Pyrzyce",
    heading: "Naprawa Pralek Pyrzyce",
    subheading: "Fachowy serwis AGD w Pyrzycach",
    footer: "© 2025 Serwis AGD Pyrzyce",
    problems: [
      "Pralka nie pobiera wody",
      "Pralka zatrzymuje się",
      "Pralka pokazuje błąd",
      "Pralka nie otwiera się",
      "Pralka hałasuje",
      "Pralka nie działa po burzy"
    ]
  },
  "Goleniow": {
    title: "Naprawa Pralek Goleniów | Serwis AGD",
    description: "Serwis pralek w Goleniowie – szybka diagnoza i naprawa.",
    keywords: "naprawa pralek Goleniów, serwis AGD Goleniów",
    heading: "Naprawa Pralek Goleniów",
    subheading: "Profesjonalna pomoc AGD w Goleniowie",
    footer: "© 2025 Serwis AGD Goleniów",
    problems: [
      "Pralka nie wiruje",
      "Pralka nie odpompowuje",
      "Pralka przecieka",
      "Pralka nie reaguje",
      "Pralka śmierdzi",
      "Pralka zatrzymuje się"
    ]
  },
  "Maszewo": {
    title: "Naprawa Pralek Maszewo | Serwis AGD",
    description: "Naprawa pralek w Maszewie – lokalny serwis AGD.",
    keywords: "naprawa pralek Maszewo, serwis AGD Maszewo",
    heading: "Naprawa Pralek Maszewo",
    subheading: "Szybka pomoc techniczna w Maszewie",
    footer: "© 2025 Serwis AGD Maszewo",
    problems: [
      "Pralka nie pobiera wody",
      "Pralka nie wiruje",
      "Pralka pokazuje błąd",
      "Pralka nie działa",
      "Pralka hałasuje",
      "Pralka nie grzeje"
    ]
  },
  "Nowogard": {
    title: "Naprawa Pralek Nowogard | Serwis AGD",
    description: "Serwis pralek w Nowogardzie – tanio i skutecznie.",
    keywords: "naprawa pralek Nowogard, serwis AGD Nowogard",
    heading: "Naprawa Pralek Nowogard",
    subheading: "Fachowa naprawa AGD w Nowogardzie",
    footer: "© 2025 Serwis AGD Nowogard",
    problems: [
      "Pralka nie odpompowuje",
      "Pralka nie wiruje",
      "Pralka przecieka",
      "Pralka zatrzymuje się",
      "Pralka nie działa",
      "Pralka pokazuje błąd"
    ]
  },
  "Police": {
    title: "Naprawa Pralek Police | Serwis AGD",
    description: "Naprawa pralek w Policach – szybki dojazd i diagnoza.",
    keywords: "naprawa pralek Police, serwis AGD Police",
    heading: "Naprawa Pralek Police",
    subheading: "Profesjonalny serwis AGD w Policach",
    footer: "© 2025 Serwis AGD Police",
    problems: [
      "Pralka nie pobiera wody",
      "Pralka nie wiruje",
      "Pralka hałasuje",
      "Pralka nie odpompowuje",
      "Pralka przecieka",
      "Pralka nie działa po przepięciu"
    ]
  }
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
