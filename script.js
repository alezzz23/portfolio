// Translations
const translations = {
    es: {
        nav: {
            about: "Sobre mí",
            stack: "Stack",
            education: "Estudios",
            projects: "Proyectos",
            work: "Experiencia",
            contact: "Contacto"
        },
        hero: {
            title: "Desarrollador Fullstack y Ciberseguridad",
            description: "Apasionado por construir soluciones y contribuir a comunidades open source. Especializado en desarrollo web moderno con tecnologías de vanguardia.",
            downloadCV: "Descargar CV"
        },
        about: {
            title: "Sobre mí",
            lead: "Soy Moises Rodriguez. Me gusta construir productos web, automatizar procesos y seguir aprendiendo tecnologías modernas.",
            paragraph: "Trabajo en desarrollo fullstack, con interés en ciberseguridad y buenas prácticas. Me enfoco en crear interfaces limpias, código mantenible y soluciones que escalen.",
            security: {
                title: "Seguridad",
                text: "Practico buenas prácticas de seguridad, como HTTPS, autenticación y autorización."
            },
            focus: {
                title: "Enfoque",
                text: "Calidad, performance, experiencia de usuario"
            },
            interests: {
                title: "Intereses",
                text: "Seguridad, automatización, Open Source"
            }
        },
        stack: {
            title: "Stack",
            lead: "Tecnologías con las que trabajo."
        },
        education: {
            title: "Estudios",
            lead: "Mi formación académica y certificaciones relevantes en el área de tecnología.",
            university: {
                name: "Universidad Experimental Gran Caracas",
                degree: "Ingeniería Informática",
                bullet1: "Especialización en desarrollo de software y arquitectura de sistemas",
                bullet2: "Proyectos destacados en inteligencia artificial y machine learning"
            },
            cert: {
                name: "Certificación en Ciberseguridad",
                degree: "Seguridad Informática y Redes",
                bullet1: "Análisis de vulnerabilidades y evaluación de riesgos en sistemas",
                bullet2: "Implementación de medidas de seguridad en redes y aplicaciones web",
                bullet3: "Gestión de incidentes y respuesta a ataques cibernéticos"
            },
            highschool: {
                name: "Técnico Medio en Informática",
                degree: "Bachillerato con especialización en Informática",
                bullet1: "Desarrollo de sistema web integral para la gestión administrativa del liceo",
                bullet2: "Creación de página web institucional con diseño responsive",
                bullet3: "Formación en fundamentos de programación y bases de datos",
                bullet4: "Introducción a redes informáticas y mantenimiento de equipos"
            }
        },
        projects: {
            title: "Proyectos",
            lead: "Una selección de proyectos y trabajos recientes.",
            viewDemo: "Ver demo",
            sourceCode: "Código fuente",
            viewCode: "Ver código",
            code: "Código",
            neuroteach: {
                desc: "Plataforma innovadora que utiliza affective computing y modelos de lenguaje avanzados para adaptar el contenido educativo según el estado emocional y rendimiento cognitivo."
            },
            aula: {
                desc: "Sistema web completo para la gestión educativa que permite administrar estudiantes, profesores, materias, notas, asistencia y actividades académicas de manera eficiente y moderna."
            },
            landing: {
                desc: "La Jornada Científica 2025 es un evento académico que reúne a investigadores, profesionales y estudiantes para compartir experiencias, resultados de investigación y avances en diversas áreas del conocimiento científico."
            }
        },
        work: {
            title: "Experiencia",
            lead: "Resumen de mis roles más recientes.",
            remote: "Remoto",
            professional: {
                role: "Desarrollador Frontend",
                date: "Enero 2026 — febrero 2026",
                bullet1: "Desarrollo de interfaces de usuario interactivas y responsivas utilizando React.js y Next.js, mejorando la experiencia de usuario en un 35% según métricas de Google Analytics.",
                bullet2: "Optimización del rendimiento frontend, logrando reducir el tiempo de carga en un 45% mediante técnicas como code-splitting y lazy loading.",
                bullet3: "Implementación de pruebas unitarias y de integración con Jest y Testing Library, alcanzando una cobertura del 85% en componentes críticos."
            },
            ivitec: {
                role: "Desarrollador Fullstack",
                date: "Julio 2025 — Enero 2026",
                bullet1: "Diseñé y ejecuté pruebas automatizadas para garantizar la calidad del software (QA), asegurando la estabilidad de los entregables antes del despliegue.",
                bullet2: "Resolví incidencias técnicas y bugs reportados por los usuarios finales, optimizando la operatividad del sistema y mejorando la experiencia de uso.",
                bullet3: "Desarrollé y mantuve funcionalidades utilizando un stack tecnológico compuesto por Laravel, MySQL, JavaScript y Python."
            },
                        conviasa: {
                role: "Pasante Área desarrollo",
                date: "Abril 2025 — Junio 2025",
                bullet1: "Optimicé el rendimiento y la estabilidad de 2 sistemas web de facturación electrónica, resolviendo más de 30 errores críticos relacionados con la validación de datos.",
                bullet2: "Diseñé e implementé interfaces de usuario modernas para 4 nuevos módulos de gestión, mejorando la usabilidad y reduciendo el tiempo de carga en un 20%.",
                bullet3: "Mejoré la arquitectura de bases de datos para soportar cientos de transacciones diarias, garantizando integridad y seguridad de la información."
            },
            suptrima: {
                role: "Desarrollador Web",
                date: "Enero 2026 — Actualidad",
                subroles: {
                    maturin: {
                        name: "Superintendencia de Maturín",
                        role: "Desarrollador Fullstack"
                    },
                    anaco: {
                        name: "Superintendencia de Anaco",
                        role: "Desarrollador Fullstack"
                    }
                },
                bullet1: "Desarrollo de dashboards interactivos para la visualización de datos tributarios y administrativos.",
                bullet2: "Identificación y resolución de bugs críticos en diversos sistemas municipales, asegurando la estabilidad operativa.",
                bullet3: "Implementación de validaciones robustas y medidas de seguridad en formularios y procesos de recolección de datos."
            }
        },
        contact: {
            title: "Contacto",
            lead: "Si tienes alguna pregunta o quieres colaborar, no dudes en dejarme un mensaje.",
            namePlaceholder: "Nombre",
            emailPlaceholder: "Correo electrónico",
            messagePlaceholder: "Mensaje",
            sendButton: "Enviar"
        },
        footer: {
            copyright: "Copyright © Moises Rodriguez {year} Todos los derechos reservados"
        }
    },
    en: {
        nav: {
            about: "About",
            stack: "Stack",
            education: "Education",
            projects: "Projects",
            work: "Experience",
            contact: "Contact"
        },
        hero: {
            title: "Fullstack Developer & Cybersecurity",
            description: "Passionate about building solutions and contributing to open source communities. Specialized in modern web development with cutting-edge technologies.",
            downloadCV: "Download CV"
        },
        about: {
            title: "About Me",
            lead: "I'm Moises Rodriguez. I like building web products, automating processes, and continuously learning modern technologies.",
            paragraph: "I work in fullstack development, with interest in cybersecurity and best practices. I focus on creating clean interfaces, maintainable code, and scalable solutions.",
            security: {
                title: "Security",
                text: "I practice good security practices, such as HTTPS, authentication, and authorization."
            },
            focus: {
                title: "Focus",
                text: "Quality, performance, user experience"
            },
            interests: {
                title: "Interests",
                text: "Security, automation, Open Source"
            }
        },
        stack: {
            title: "Stack",
            lead: "Technologies I work with."
        },
        education: {
            title: "Education",
            lead: "My academic background and relevant certifications in the technology field.",
            university: {
                name: "Universidad Experimental Gran Caracas",
                degree: "Computer Engineering",
                bullet1: "Specialization in software development and system architecture",
                bullet2: "Featured projects in artificial intelligence and machine learning"
            },
            cert: {
                name: "Cybersecurity Certification",
                degree: "Computer Security & Networks",
                bullet1: "Vulnerability analysis and risk assessment in systems",
                bullet2: "Implementation of security measures in networks and web applications",
                bullet3: "Incident management and response to cyber attacks"
            },
            highschool: {
                name: "Technical High School in Computing",
                degree: "High School with specialization in Computing",
                bullet1: "Development of comprehensive web system for school administrative management",
                bullet2: "Creation of institutional website with responsive design",
                bullet3: "Training in programming fundamentals and databases",
                bullet4: "Introduction to computer networks and equipment maintenance"
            }
        },
        projects: {
            title: "Projects",
            lead: "A selection of recent projects and works.",
            viewDemo: "View demo",
            sourceCode: "Source code",
            viewCode: "View code",
            code: "Code",
            neuroteach: {
                desc: "Innovative platform that uses affective computing and advanced language models to adapt educational content based on emotional state and cognitive performance."
            },
            aula: {
                desc: "Complete web system for educational management that allows managing students, teachers, subjects, grades, attendance, and academic activities efficiently and modernly."
            },
            landing: {
                desc: "The Scientific Journey 2025 is an academic event that brings together researchers, professionals, and students to share experiences, research results, and advances in various areas of scientific knowledge."
            }
        },
        work: {
            title: "Experience",
            lead: "Summary of my most recent roles.",
            remote: "Remote",
            professional: {
                role: "Frontend Developer",
                date: "January 2026 — February 2026",
                bullet1: "Development of interactive and responsive user interfaces using React.js and Next.js, improving user experience by 35% according to Google Analytics metrics.",
                bullet2: "Frontend performance optimization, achieving a 45% reduction in loading time through techniques like code-splitting and lazy loading.",
                bullet3: "Implementation of unit and integration tests with Jest and Testing Library, achieving 85% coverage in critical components."
            },
            ivitec: {
                role: "Fullstack Developer",
                date: "July 2025 — January 2026",
                bullet1: "Designed and executed automated tests to ensure software quality (QA), ensuring the stability of deliverables before deployment.",
                bullet2: "Resolved technical issues and bugs reported by end users, optimizing system operability and improving the user experience.",
                bullet3: "Developed and maintained functionalities using a technology stack composed of Laravel, MySQL, JavaScript, and Python."
            },
                        conviasa: {
                role: "Development Area Intern",
                date: "April 2025 — June 2025",
                bullet1: "Optimized performance and stability of 2 electronic billing web systems, resolving more than 30 critical errors related to data validation.",
                bullet2: "Designed and implemented modern user interfaces for 4 new management modules, improving usability and reducing loading time by 20%.",
                bullet3: "Improved database architecture to support hundreds of daily transactions, ensuring data integrity and security."
            },
            suptrima: {
                role: "Web Developer",
                date: "january 2026 — Present",
                subroles: {
                    maturin: {
                        name: "Superintendencia de Maturín",
                        role: "Fullstack Developer"
                    },
                    anaco: {
                        name: "Superintendencia de Anaco",
                        role: "Fullstack Developer"
                    }
                },
                bullet1: "Development of interactive dashboards for the visualization of tax and administrative data.",
                bullet2: "Identification and resolution of critical bugs in various municipal systems, ensuring operational stability.",
                bullet3: "Implementation of robust validations and security measures in forms and data collection processes."
            }
        },
        contact: {
            title: "Contact",
            lead: "If you have any questions or want to collaborate, don't hesitate to leave me a message.",
            namePlaceholder: "Name",
            emailPlaceholder: "Email",
            messagePlaceholder: "Message",
            sendButton: "Send"
        },
        footer: {
            copyright: "Copyright © Moises Rodriguez {year} All rights reserved"
        }
    }
};

// Language Toggle Functionality
(function() {
    'use strict';

    // Get language from localStorage or default to Spanish
    function getLanguage() {
        const savedLang = localStorage.getItem('language');
        return savedLang || 'es';
    }

    // Set language
    function setLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('language', lang);
        updateLanguageIcon(lang);
        applyTranslations(lang);
    }

    // Update language icon
    function updateLanguageIcon(lang) {
        const langLabel = document.getElementById('current-lang');
        if (langLabel) {
            langLabel.textContent = lang.toUpperCase();
        }
    }

    // Apply translations to the page
    function applyTranslations(lang) {
        const t = translations[lang];
        if (!t) return;

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const value = getNestedValue(t, key);
            if (value) {
                element.textContent = value;
            }
        });

        // Update all elements with data-i18n-placeholder attribute
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const value = getNestedValue(t, key);
            if (value) {
                element.placeholder = value;
            }
        });

        // Update footer copyright with year
        const footerCopyright = document.querySelector('[data-i18n="footer.copyright"]');
        if (footerCopyright) {
            const year = new Date().getFullYear();
            const copyrightText = getNestedValue(t, 'footer.copyright');
            if (copyrightText) {
                footerCopyright.innerHTML = copyrightText.replace('{year}', year);
            }
        }
    }

    // Get nested value from object using dot notation
    function getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => {
            return current && current[key] !== undefined ? current[key] : null;
        }, obj);
    }

    // Initialize language when DOM is ready
    function initLanguage() {
        const currentLang = getLanguage();
        setLanguage(currentLang);
    }

    // Language toggle button event
    function setupLanguageToggle() {
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', function(e) {
                e.preventDefault();
                const currentLang = getLanguage();
                const newLang = currentLang === 'es' ? 'en' : 'es';
                setLanguage(newLang);
            });
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initLanguage();
            setupLanguageToggle();
        });
    } else {
        initLanguage();
        setupLanguageToggle();
    }
})();

// Theme Toggle Functionality
(function() {
    'use strict';

    // Get theme from localStorage or default to dark
    function getTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    // Set theme
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
    }

    // Update theme icon based on current theme
    function updateThemeIcon(theme) {
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');
        const themeToggle = document.getElementById('theme-toggle');

        if (!sunIcon || !moonIcon || !themeToggle) return;

        if (theme === 'light') {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
            themeToggle.style.transform = 'rotate(180deg)';
        } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
            themeToggle.style.transform = 'rotate(0deg)';
        }
    }

    // Initialize theme when DOM is ready
    function initTheme() {
        const currentTheme = getTheme();
        setTheme(currentTheme);
    }

    // Theme toggle button event
    function setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', function(e) {
                e.preventDefault();
                const currentTheme = document.documentElement.getAttribute('data-theme') || getTheme();
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                setTheme(newTheme);
            });
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initTheme();
            setupThemeToggle();
        });
    } else {
        initTheme();
        setupThemeToggle();
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
})();

// Mobile Menu Functionality
(function() {
    'use strict';

    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function openMenu() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Open menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', openMenu);
    }

    // Close menu
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMenu);
    }

    // Close menu when clicking on a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            closeMenu();
        }
    });
})();

// Set current year in footer
(function() {
    'use strict';
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
})();

// Smooth scroll for anchor links
(function() {
    'use strict';
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            if (href === '#demo') {
                e.preventDefault();
                if (typeof Swal !== 'undefined' && Swal && typeof Swal.fire === 'function') {
                    Swal.fire({
                        icon: 'info',
                        title: 'Oops...',
                        text: 'Todavía no tengo algún hosting para la demo :(',
                        confirmButtonText: 'Ok'
                    });
                } else {
                    alert('Todavía no tengo algún hosting para la demo :(');
                }
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
})();

// Add fade-in animation on scroll
(function() {
    'use strict';

    if (!('IntersectionObserver' in window)) return;
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.hero-section, .content-section, .work-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
})();
