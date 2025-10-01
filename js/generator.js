document.addEventListener("DOMContentLoaded", function () {
  // === ОПРЕДЕЛЕНИЕ СТРАНИЦЫ ===
  const path = window.location.pathname.split("/").pop().replace(".html", "");
  const city = path.charAt(0).toUpperCase() + path.slice(1);
  const device = path.toLowerCase();
  const brand = path.toLowerCase();

  let data = null;

  // === ДАННЫЕ ПО ГОРОДАМ ===
  if (typeof miasta !== "undefined" && miasta[city]) {
    data = miasta[city];
  }

  // === ДАННЫЕ ПО УСТРОЙСТВАМ ===
  if (!data && typeof urzadzenia !== "undefined" && urzadzenia[device]) {
    data = urzadzenia[device];
  }

  // === ДАННЫЕ ПО БРЕНДАМ ===
  if (!data && typeof marki !== "undefined" && marki[brand]) {
    data = marki[brand];

    // === SCHEMA.ORG ДЛЯ БРЕНДА ===
    const schemaBrand = {
      "@context": "https://schema.org",
      "@type": "Product",
      "brand": brand.charAt(0).toUpperCase() + brand.slice(1),
      "name": data.heading,
      "description": data.description,
      "url": window.location.href
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaBrand);
    document.head.appendChild(script);
  }

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

    // === SCHEMA.ORG ДЛЯ ГОРОДА ИЛИ УСТРОЙСТВА ===
    if (!marki || !marki[brand]) {
      const schemaService = {
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

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schemaService);
      document.head.appendChild(script);
    }
  }
});
