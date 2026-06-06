document.addEventListener('DOMContentLoaded', () => {

  // --- Translation Logic ---
  const translations = {
    en: {
      "location": "Ingolstadt, Bavaria, Germany",
      "summary-title": "Summary",
      "summary-text": "Computers and Systems Engineer with experience in Embedded Systems Software Development. Skilled in Python, C++, and C. Ranked second in university class with overall distinction grade.",
      "current-position-title": "Previous Experience",
      "job-title": "Embedded Software Engineer",
      "job-period": "(November 2022 – April 2026)",
      "job-location": "Valeo, Cairo, Egypt",
      "job-task-1": "Developing Python tools for facilitating development and testing processes.",
      "job-task-2": "Creating and maintaining traceability matrices.",
      "job-task-3": "Implementing and refactoring SIMULINK models for code generation.",
      "job-task-4": "Implementing and designing Model in Loop (MiL) & Software in Loop (SiL) test cases for models.",
      "job-task-5": "Performing integration for software components.",
      "job-task-6": "Peer-reviewing work products (Design Documents, Code, Test documents).",
      "job-task-7": "Worked on High-Voltage Heaters for different OEMs (PSA, RSA, JLR, Stellantis, GWM).",
      "job-task-8": "Developing Python Scripts for CI/CD pipelines.",
      "job-task-9": "Experienced with Software guidelines (MISRA-C rules, Corporate rules) and static/runtime analysis tools (e.g., PolySpace).",
      "job-task-10": "Analyzing and Tracking Customers’ requirements using requirements management tools (e.g., Reqtify).",
      "job-task-11": "Automating test cases using Robot Framework.",
      "job-task-12": "Performing Manual and Automatic Integration Testing’s Planning and executing.",
      "job-task-13": "Using Davinci Configurator to configure the DCM module of the Communication Stack.",
      "education-title": "Education",
      "edu-thi-degree": "M. Sc. in Sociotechnical Cybersecurity",
      "edu-thi-period": "(March 2026 – Present)",
      "edu-minia-degree": "B. Sc. in Computers and Systems Engineering",
      "edu-minia-period": "(Sep 2017 – Jul 2022)",
      "edu-minia-grade": "Cumulative Grade: Excellent with Honor (GPA: 3.7/4.0, German: 1.7)",
      "training-title": "Training",
      "training-1": "RTOS and Automotive Technology, 2022, National Telecommunication Institute (NTI)",
      "training-2": "Embedded Systems Training, 2021, Information Technology Institute (ITI)",
      "skills-title": "Technical Skills",
      "skills-languages": "Languages",
      "skills-platforms": "Platforms",
      "skills-protocols": "Protocols",
      "skills-peripherals": "Peripherals",
      "skills-ds-algo": "Data Structures & Algorithms",
      "skills-rtos": "Real-Time Operating Systems",
      "rtos-desc": "Task management, scheduling, inter-task communication",
      "skills-tools": "Tools",
      "tools-dev": "Development:",
      "tools-test": "Debugging & Testing:",
      "tools-cicd": "CI/CD & Automation:",
      "tools-vc": "Version Control & Project Management:",
      "tools-doc": "Documentation:",
      "skills-domain": "Domain Knowledge & Methodologies",
      "domain-1": "Strong with the C build process, software development life cycle (SDLC) and Automotive SPICE standards for embedded systems development.",
      "domain-2": "Good understanding of Buildroot, Yocto, and Linux system programming.",
      "projects-title": "Projects",
      "project-1-title": "Drivers' Implementation for MCAL/HAL:",
      "project-2-title": "CLI-TypingClub:",
      "project-2-desc": "A command-line interface typing tutor to improve typing speed and accuracy.",
      "project-3-title": "Line Follower Robot:",
      "project-3-desc": "Based on ATmega32, IR sensors, L293 driver",
      "project-4-title": "Magnetic levitation system:",
      "project-4-desc": "Linearization, modelling, simulation, and testing of magnetic levitation system using SIMULINK and HIL Bench",
      "video-link": "Video Link",
      "github-link": "GitHub Link",
      "online-projects-title": "Online Projects",
      "online-project-1": "Create User Directory and Files with Linux Commands",
      "online-project-2": "Introduction to Pointers and Memory Management in C/C++",
      "online-project-3": "Getting Started with Cascading Style Sheet",
      "courses-title": "Courses & Certifications",
      "show-more": "Show More",
      "show-less": "Show Less",
      "langs-title": "Languages",
      "lang-1": "Arabic – Native",
      "lang-2": "English – Full Professional",
      "lang-3": "German – Intermediate (B1)",
      "pers-skills-title": "Personal Skills",
      "skill-1": "Self-discipline",
      "skill-2": "Team player",
      "skill-3": "Leadership",
      "skill-4": "Good communicator",
      "skill-5": "Problem solving",
      "pers-data-title": "Personal Data",
      "birth-date": "Date of Birth: 25/10/1999",
      "military-status": "Military Status: Exempted",
      "links-title": "Links",
      "link-linkedin": "LinkedIn Profile",
      "link-github": "GitHub Profile",
      "link-stack": "Stack Overflow Profile",
      "link-xing": "XING Profile",
      "footer-rights": "All Rights Reserved."
    },
    de: {
      "location": "Ingolstadt, Bayern, Deutschland",
      "summary-title": "Zusammenfassung",
      "summary-text": "Computer- und Systemingenieur mit Erfahrung in der Softwareentwicklung für eingebettete Systeme. Kenntnisse in Python, C++ und C. Zweitplatzierter im Universitätsjahrgang mit der Gesamtnote Auszeichnung.",
      "current-position-title": "Vorherige Erfahrung",
      "job-title": "Embedded Softwareentwickler",
      "job-period": "(Nov. 2022 – April 2026)",
      "job-location": "Valeo, Kairo, Ägypten",
      "job-task-1": "Entwicklung von Python-Tools zur Erleichterung von Entwicklungs- und Testprozessen.",
      "job-task-2": "Erstellung und Pflege von Rückverfolgbarkeitsmatrizen.",
      "job-task-3": "Implementierung und Refactoring von SIMULINK-Modellen für die Codegenerierung.",
      "job-task-4": "Implementierung und Design von Model in Loop (MiL) & Software in Loop (SiL) Testfällen für Modelle.",
      "job-task-5": "Durchführung der Integration für Softwarekomponenten.",
      "job-task-6": "Peer-Review von Arbeitsprodukten (Designdokumente, Code, Testdokumente).",
      "job-task-7": "Arbeit an Hochvolt-Heizungen für verschiedene OEMs (PSA, RSA, JLR, Stellantis, GWM).",
      "job-task-8": "Entwicklung von Python-Skripten für CI/CD-Pipelines.",
      "job-task-9": "Erfahrung mit Software-Richtlinien (MISRA-C-Regeln, Unternehmensregeln) und statischen/Laufzeit-Analysetools (z. B. PolySpace).",
      "job-task-10": "Analyse und Verfolgung von Kundenanforderungen mit Anforderungsmanagement-Tools (z. B. Reqtify).",
      "job-task-11": "Automatisierung von Testfällen mit dem Robot Framework.",
      "job-task-12": "Planung und Durchführung von manuellen und automatischen Integrationstests.",
      "job-task-13": "Verwendung von Davinci Configurator zur Konfiguration des DCM-Moduls des Communication Stacks.",
      "education-title": "Ausbildung",
      "edu-thi-degree": "M. Sc. in Sociotechnical Cybersecurity",
      "edu-thi-period": "(März 2026 – Heute)",
      "edu-minia-degree": "B. Sc. in Computer- und Systemtechnik",
      "edu-minia-period": "(Sep. 2017 – Juli 2022)",
      "edu-minia-grade": "Gesamtnote: Ausgezeichnet mit Auszeichnung (GPA: 3,7/4,0, Deutsch: 1,7)",
      "training-title": "Schulung",
      "training-1": "RTOS und Automotive-Technologie, 2022, National Telecommunication Institute (NTI)",
      "training-2": "Embedded-Systems-Schulung, 2021, Information Technology Institute (ITI)",
      "skills-title": "Technische Fähigkeiten",
      "skills-languages": "Sprachen",
      "skills-platforms": "Plattformen",
      "skills-protocols": "Protokolle",
      "skills-peripherals": "Peripheriegeräte",
      "skills-ds-algo": "Datenstrukturen & Algorithmen",
      "skills-rtos": "Echtzeit-Betriebssysteme",
      "rtos-desc": "Task-Management, Scheduling, Inter-Task-Kommunikation",
      "skills-tools": "Werkzeuge",
      "tools-dev": "Entwicklung:",
      "tools-test": "Debugging & Testen:",
      "tools-cicd": "CI/CD & Automatisierung:",
      "tools-vc": "Versionskontrolle & Projektmanagement:",
      "tools-doc": "Dokumentation:",
      "skills-domain": "Fachwissen & Methoden",
      "domain-1": "Sicher im C-Build-Prozess, Software Development Life Cycle (SDLC) und Automotive SPICE Standards für die Entwicklung eingebetteter Systeme.",
      "domain-2": "Gutes Verständnis von Buildroot, Yocto und Linux-Systemprogrammierung.",
      "projects-title": "Projekte",
      "project-1-title": "Treiber-Implementierung für MCAL/HAL:",
      "project-2-title": "CLI-TypingClub:",
      "project-2-desc": "Ein Kommandozeilen-Schreibtrainer zur Verbesserung der Schreibgeschwindigkeit und -genauigkeit.",
      "project-3-title": "Linienfolger-Roboter:",
      "project-3-desc": "Basierend auf ATmega32, IR-Sensoren, L293-Treiber",
      "project-4-title": "Magnetisches Schwebesystem:",
      "project-4-desc": "Linearisierung, Modellierung, Simulation und Testen eines magnetischen Schwebesystems mit SIMULINK und HIL-Prüfstand",
      "video-link": "Video-Link",
      "github-link": "GitHub Link",
      "online-projects-title": "Online-Projekte",
      "online-project-1": "Erstellen von Benutzerverzeichnissen und Dateien mit Linux-Befehlen",
      "online-project-2": "Einführung in Pointer und Speicherverwaltung in C/C++",
      "online-project-3": "Erste Schritte mit Cascading Style Sheets",
      "courses-title": "Kurse & Zertifizierungen",
      "show-more": "Mehr anzeigen",
      "show-less": "Weniger anzeigen",
      "langs-title": "Sprachen",
      "lang-1": "Arabisch – Muttersprache",
      "lang-2": "Englisch – Verhandlungssicher",
      "lang-3": "Deutsch – Mittelstufe (B1)",
      "pers-skills-title": "Persönliche Fähigkeiten",
      "skill-1": "Selbstdisziplin",
      "skill-2": "Teamplayer",
      "skill-3": "Führungskompetenz",
      "skill-4": "Gute Kommunikationsfähigkeit",
      "skill-5": "Problemlösung",
      "pers-data-title": "Persönliche Daten",
      "birth-date": "Geburtsdatum: 25.10.1999",
      "military-status": "Militärstatus: Befreit",
      "links-title": "Links",
      "link-linkedin": "LinkedIn-Profil",
      "link-github": "GitHub-Profil",
      "link-stack": "Stack Overflow-Profil",
      "link-xing": "XING-Profil",
      "footer-rights": "Alle Rechte vorbehalten."
    }
  };

  let currentLang = localStorage.getItem('language') || 'en';
  let cachedCourses = null;

  const updateLanguageUI = (lang) => {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-de').classList.toggle('active', lang === 'de');

    loadCourses();
  };

  const setupLanguageSwitcher = () => {
    const btnEn = document.getElementById('btn-en');
    const btnDe = document.getElementById('btn-de');

    btnEn.addEventListener('click', () => updateLanguageUI('en'));
    btnDe.addEventListener('click', () => updateLanguageUI('de'));

    updateLanguageUI(currentLang);
  };

  // --- Theme Toggler Logic ---
  const setupThemeToggler = () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleSwitch = document.getElementById('theme-toggle-switch'); // Target the new switch
    if (!themeToggleSwitch) return; // Ensure the switch exists
    const body = document.body;
    const themeIcon = themeToggleSwitch.nextElementSibling.querySelector('i'); // Get the icon from the label

    const applyTheme = (theme) => {
      body.dataset.theme = theme;
      localStorage.setItem('theme', theme);
      themeToggleSwitch.checked = (theme === 'dark'); // Set the switch's state
      if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    };

    themeToggleSwitch.addEventListener('change', () => { // Listen for 'change' event on the switch
      const newTheme = themeToggleSwitch.checked ? 'dark' : 'light';
      applyTheme(newTheme);
    });

    // Check for saved theme on load, or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
  };

  // --- Courses Loading Logic ---
  const loadCourses = async () => {
    const coursesContainer = document.getElementById('courses-container');
    const coursesToggleContainer = document.getElementById('courses-toggle-container');
    if (!coursesContainer || !coursesToggleContainer) return;

    const INITIAL_ITEMS_VISIBLE = 10;

    const showLoading = () => {
      coursesContainer.innerHTML = `<div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>`;
      coursesToggleContainer.innerHTML = ''; // Clear toggle button while loading
    };

    const showError = () => {
      coursesContainer.innerHTML = '<p class="text-danger text-center">Failed to load courses data.</p>';
    };

    // Helper function to create a course link/text element (DRY principle)
    const createCourseElement = (item) => {
      const element = item.url ? document.createElement('a') : document.createElement('span');
      element.textContent = item.title;
      if (item.url) {
        element.href = item.url;
        element.target = '_blank';
        element.rel = 'noopener noreferrer';
        const icon = document.createElement('i');
        icon.className = 'fas fa-external-link-alt fa-xs ms-1 text-muted';
        element.appendChild(icon);
      }
      return element;
    };

    const renderCourses = (courses, lang) => {
      const coursesList = document.createElement('ul');
      courses.forEach((course, index) => {
        const listItem = document.createElement('li');
        const courseData = { ...course };
        if (lang === 'de' && course.title_de) {
          courseData.title = course.title_de;
        }
        listItem.appendChild(createCourseElement(courseData));

        if (course.details && course.details.length > 0) {
          const nestedList = document.createElement('ul');
          nestedList.className = 'nested-list';
          course.details.forEach(detail => {
            const detailData = { ...detail };
            if (lang === 'de' && detail.title_de) {
              detailData.title = detail.title_de;
            }
            const nestedItem = document.createElement('li');
            nestedItem.appendChild(createCourseElement(detailData));
            nestedList.appendChild(nestedItem);
          });
          listItem.appendChild(nestedList);
        }

        // Hide items beyond the initial visible limit
        if (index >= INITIAL_ITEMS_VISIBLE) {
          listItem.style.display = 'none';
        }

        coursesList.appendChild(listItem);
      });
      coursesContainer.replaceChildren(coursesList);

      // Add "Show More/Less" button if needed
      if (courses.length > INITIAL_ITEMS_VISIBLE) {
        const toggleButton = document.createElement('button');
        toggleButton.className = 'btn btn-outline-primary btn-sm mt-3';
        toggleButton.textContent = translations[lang]['show-more'];
        let isShowingAll = false;

        toggleButton.addEventListener('click', () => {
          isShowingAll = !isShowingAll;
          const listItems = Array.from(coursesList.children);
          for (let i = INITIAL_ITEMS_VISIBLE; i < listItems.length; i++) {
            listItems[i].style.display = isShowingAll ? 'list-item' : 'none';
          }
          toggleButton.textContent = isShowingAll ? translations[lang]['show-less'] : translations[lang]['show-more'];
        });

        coursesToggleContainer.appendChild(toggleButton);
      }
    };

    showLoading();
    try {
      if (cachedCourses) {
        renderCourses(cachedCourses, currentLang);
        return;
      }
      const response = await fetch('data.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      cachedCourses = data.courses;
      renderCourses(cachedCourses, currentLang);
    } catch (error) {
      console.error('Error fetching or parsing courses data:', error);
      showError();
    }
  };

  // --- Scroll Animation Logic ---
  const setupScrollAnimations = () => {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });
  };

  // --- Footer Logic ---
  const setFooterYear = () => {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  }

  // Initialize all features
  setupLanguageSwitcher();
  setupThemeToggler();
  setupScrollAnimations();
  setFooterYear();

  // --- Scroll to Top Button Logic ---
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    // When the user scrolls down 100px from the top of the document, show the button
    window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    };

    // When the user clicks on the button, scroll to the top of the document
    scrollTopBtn.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});