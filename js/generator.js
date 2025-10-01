// === ДАННЫЕ ПО ГОРОДАМ ===
const miasta = {
  "Stargard": { title: "...", description: "...", keywords: "...", heading: "...", subheading: "...", footer: "...", problems: [ ... ] },
  "Szczecin": { ... },
  "Pyrzyce": { ... },
  "Goleniow": { ... },
  "Maszewo": { ... },
  "Nowogard": { ... },
  "Police": { ... }
};

// === ДАННЫЕ ПО УСТРОЙСТВАМ ===
const urzadzenia = {
  "pralki": {
    title: "Naprawa Pralek | Serwis AGD",
    description: "Wyjazdowa naprawa pralek – szybki serwis z dojazdem.",
    keywords: "naprawa pralek, serwis AGD, pralka nie działa",
    heading: "Naprawa Pralek",
    subheading: "Profesjonalny serwis AGD – pralka nie działa? Zadzwoń!",
    problems: [
      "Pralka nie pobiera wody",
      "Pralka nie wiruje",
      "Pralka hałasuje",
      "Pralka nie odprowadza wody",
      "Pralka zatrzymuje się",
      "Pralka pokazuje błąd E21"
    ]
  },
  "zmywarki": {
    title: "Naprawa Zmywarek | Serwis AGD",
    description: "Naprawa zmywarek z dojazdem – szybko i skutecznie.",
    keywords: "naprawa zmywarek, serwis AGD, zmywarka nie działa",
    heading: "Naprawa Zmywarek",
    subheading: "Profesjonalny serwis AGD – zmywarka nie działa? Zadzwoń!",
    problems: [
      "Zmywarka nie pobiera wody",
      "Zmywarka nie grzeje",
      "Zmywarka przecieka",
      "Zmywarka nie kończy cyklu",
      "Zmywarka pokazuje błąd E24",
      "Zmywarka nie odpompowuje"
    ]
  },
  // Добавь suszarki, piekarniki и т.д.
};

// === ОПРЕДЕЛЕНИЕ СТРАНИЦЫ ===
const path = window.location.pathname.split("/").pop().replace(".html", "");
const city = path.charAt(0).toUpperCase() + path.slice(1);
const device = path.toLowerCase();

// === ВЫБОР ДАННЫХ ===
let data = miasta[city] || urzadzenia[device] || null;

// === ПОДСТАНОВКА В HTML ===
if (data) {
  document.title = data.title;
  document.getElementById("meta-description")?.setAttribute("content", data.description);
  document.getElementById("meta-keywords")?.setAttribute("content", data.keywords);
  document.getElementById("main-heading")?.textContent = data.heading;
  document.getElementById("sub-heading")?.textContent = data.subheading;
  document.getElementById("footer-text")?.textContent = data.footer || "";

  const ul = document.getElementById("problem-list");
  if (ul && data.problems) {
    ul.innerHTML = "";
    data.problems.forEach(problem => {
      const li = document.createElement("li");
      li.textContent = problem;
      ul.appendChild(li);
    });
  }

  // === SCHEMA.ORG ===
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Serwis AGD WISA",
    "url": window.location.href,
    "description": data.description,
    "serviceType": data.heading,
    "areaServed": { "@type": "Place", "name": miasta[city] ? city : "Szczecin" },
    "availableLanguage": ["pl", "ru", "en"],
    "priceRange": "od 100 zł",
    "openingHours": "Mo-Fr 08:00-18:00",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+48 123 456 789",
      "email": "kontakt@naprawagd24.pl"
    }
  };

  const schemaScript = document.createElement("script");
  schemaScript.type = "application/ld+json";
  schemaScript.text = JSON.stringify(schemaData);
  document.head.appendChild(schemaScript);
}
