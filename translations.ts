export type Language = 'de' | 'en' | 'es';

export const translations = {
  de: {
    // Navbar
    nav: {
      startseite: 'Startseite',
      leistungen: 'Leistungen',
      preismodelle: 'Preismodelle',
      überMich: 'Über mich',
      jetztStarten: 'Jetzt starten',
    },
    // Hero
    hero: {
      badge: 'Digitalisierung einfach gemacht',
      title: 'Dein Business.',
      titleHighlight: 'Digital. Persönlich.',
      description: 'Ich helfe Kleinunternehmen dabei, den Schritt in die digitale Welt zu wagen. Ehrlich, persönlich und ohne kompliziertes Fach-Chinesisch.',
      ctaPrimary: 'Angebot einholen',
      ctaSecondary: 'Leistungen',
    },
    // Services
    services: {
      title: 'Alles, was dein Business braucht',
      subtitle: 'Vom ersten Pixel bis zum fertigen Druckerzeugnis – ich begleite dich bei jedem Schritt.',
      items: [
        {
          title: 'Modernes Webdesign',
          description: 'Mobil-optimierte Websites, die auf jedem Gerät glänzen und deine Kunden überzeugen.',
        },
        {
          title: 'High-End Landingpages',
          description: 'Exklusive, verkaufspsychologisch optimierte Zielseiten, die deine Marke im Premium-Segment positionieren und Besucher durch intelligentes Design in treue Kunden verwandeln.',
        },
        {
          title: 'SEO-Optimierung',
          description: 'Werde gefunden! Ich sorge für die nötige Grundoptimierung, damit Google dich liebt.',
        },
        {
          title: 'Branding & Logo',
          description: 'Ein unverwechselbares Gesicht für dein Business. Von Logos bis hin zu Farbschemata.',
        },
        {
          title: 'Printmedien',
          description: 'Visitenkarten, Flyer und Broschüren. Hochwertiges Design auch zum Anfassen.',
        },
        {
          title: 'Ehrliche Beratung',
          description: 'Ich stehe dir als Partnerin zur Seite und helfe dir bei fairen Verträgen und Modellen.',
        },
      ],
    },
    // AboutMe
    aboutMe: {
      badge: 'Wer steckt dahinter?',
      title: 'Deine Partnerin auf Augenhöhe',
      paragraph1: 'Hallo, ich bin Diana. Ich weiß, dass die digitale Welt für viele Klein- und Kleinstunternehmen erst einmal einschüchternd wirken kann. Unklare Kosten, komplizierte Fachbegriffe und anonyme Agenturen machen den ersten Schritt oft schwer.',
      paragraph2: 'Genau deshalb habe ich Design by Diana gegründet. Mein Ziel ist es, deine Partnerin an deiner Seite zu sein, die komplizierte Technik einfach macht. Ich begleite dich persönlich vom ersten Entwurf deiner "digitalen Visitenkarte" bis hin zur fertigen SEO-Optimierung.',
      quote: 'Ich stehe für Qualität, faire Modelle ohne Knebelverträge und echte persönliche Erreichbarkeit. Wenn du Fragen hast, rufst du mich an – kein Callcenter, keine Warteschleife.',
      paragraph3: 'Ob Handwerksbetrieb, kleines Café oder aufstrebendes Startup: Du verdienst eine Webpräsenz, die dich widerspiegelt und deine Kunden begeistert. Lass uns gemeinsam den Schritt in die Digitalisierung gehen – motiviert, ehrlich und erfolgreich.',
      cta: 'Kennenlernen',
      whatsappMessage: 'Hallo Diana, ich möchte dich gerne kennenlernen und mehr über ein Website-Projekt erfahren!',
    },
    // SorglosPaket
    sorglosPaket: {
      title: 'Das Sorglos-Paket:',
      titleHighlight: 'Du arbeitest, ich kümmere mich.',
      description: 'Keine Lust auf Updates, Sicherheitslücken oder komplizierte Technik? Mein USP ist dein Vorteil: Ich übernehme die komplette Wartung.',
      items: [
        'Regelmäßige Sicherheits-Updates',
        'Backup-Management (Sicherung deiner Daten)',
        'Kleine Text- & Bildänderungen inklusive',
        'Persönliche Erreichbarkeit bei Fragen',
        'Maximaler Schutz vor Cyberangriffen',
      ],
      cardTitle: '100% Technik-Freiheit',
      cardQuote: '"Diana ist wie eine Mitarbeiterin, die ich nur dann bezahle, wenn ich sie brauche – nur günstiger!"',
      cardInclusive: 'Inklusive',
      cardSubtext: 'in jedem Wartungs-Vertrag',
    },
    // Pricing
    pricing: {
      title: 'Faire Preise ohne Fallen',
      subtitle: 'Keine langen Knebelverträge. Monatlich kündbar, ehrlich kalkuliert.',
      plans: [
        {
          name: 'Standardpaket',
          setupPrice: 'ab 499 €',
          monthlyPrice: '49 €',
          description: 'Der ideale digitale Start für Kleinstunternehmen.',
          features: [
            'Individuelles Webdesign (1-3 Seiten)',
            'Mobil-optimiert (Responsive)',
            'SEO-Grundoptimierung',
            'Kontaktformular & Google Maps',
            'Persönliche Beratung',
            'Wartung & Sicherheit inkl.',
          ],
        },
        {
          name: 'Business-Premium',
          setupPrice: 'ab 699 €',
          monthlyPrice: '69 €',
          description: 'Mehr Power und Funktionen für dein Wachstum.',
          recommended: true,
          features: [
            'Umfangreiches Design (bis 7 Seiten)',
            'Online-Terminbuchungssystem',
            'Erweiterte SEO-Strategie',
            'Blog- oder News-Bereich',
            'Priority Support (Express)',
            'Wartung & Sicherheit inkl.',
          ],
        },
      ],
      recommended: 'Beliebteste Wahl',
      setup: 'Setup',
      monthly: '/ Monat Wartung',
      cta: 'Plan anfragen',
      trust: 'Bereits über 40 Kleinunternehmen vertrauen auf Diana.',
      cancelable: 'Monatlich kündbar',
      whatsappMessage: 'Hallo Diana, ich interessiere mich für das {planName} und würde gerne mehr darüber erfahren!',
    },
    // Contact
    contact: {
      title: 'Gratis Design-Entwurf',
      subtitle: 'Ich erstelle dir unverbindlich ein erstes Sample deiner neuen Website.',
      branchPlaceholder: 'Branche (z.B. Coaching)',
      pagesLabel: 'Anzahl der Seiten',
      pagesOptions: {
        placeholder: 'Anzahl der Seiten',
        one: 'One-Page (1 Seite)',
        twoThree: '2 bis 3 Seiten',
        fourSeven: '4 bis 7 Seiten',
        eightPlus: 'Mehr als 7 Seiten',
      },
      emailPlaceholder: 'Deine E-Mail-Adresse',
      submit: 'Jetzt mein gratis Website-Sample anfordern',
      processing: 'Persönliche Bearbeitung innerhalb von 24h',
    },
    // Footer
    footer: {
      description: 'Deine Partnerin für Digitalisierung auf Augenhöhe. Ich helfe kleinen Unternehmen, den digitalen Schritt zu wagen – mit Herz und Verstand.',
      navigation: 'Navigation',
      legal: 'Rechtliches',
      impressum: 'Impressum',
      datenschutz: 'Datenschutz',
      agb: 'AGB',
      widerruf: 'Widerruf',
      copyright: 'Alle Rechte vorbehalten.',
    },
    // WhatsApp Button
    whatsapp: {
      tooltip: 'Fragen? Schreib mir!',
      message: 'Hallo Diana, ich habe deine Website gesehen und interessiere mich für ein gratis Sample!',
    },
    // Legal
    legal: {
      impressum: 'Impressum (Aviso Legal)',
      datenschutz: 'Datenschutzerklärung',
      // Add more legal translations as needed
    },
  },
  en: {
    // Navbar
    nav: {
      startseite: 'Home',
      leistungen: 'Services',
      preismodelle: 'Pricing',
      überMich: 'About Me',
      jetztStarten: 'Get Started',
    },
    // Hero
    hero: {
      badge: 'Digitalization made simple',
      title: 'Your Business.',
      titleHighlight: 'Digital. Personal.',
      description: 'I help small businesses take the step into the digital world. Honest, personal, and without complicated jargon.',
      ctaPrimary: 'Get a quote',
      ctaSecondary: 'Services',
    },
    // Services
    services: {
      title: 'Everything your business needs',
      subtitle: 'From the first pixel to the finished print product – I accompany you every step of the way.',
      items: [
        {
          title: 'Modern Web Design',
          description: 'Mobile-optimized websites that shine on every device and impress your customers.',
        },
        {
          title: 'High-End Landing Pages',
          description: 'Exclusive, sales-psychologically optimized landing pages that position your brand in the premium segment and turn visitors into loyal customers through intelligent design.',
        },
        {
          title: 'SEO Optimization',
          description: 'Get found! I ensure the necessary basic optimization so Google loves you.',
        },
        {
          title: 'Branding & Logo',
          description: 'A distinctive face for your business. From logos to color schemes.',
        },
        {
          title: 'Print Media',
          description: 'Business cards, flyers, and brochures. High-quality design you can touch.',
        },
        {
          title: 'Honest Consulting',
          description: 'I stand by your side as a partner and help you with fair contracts and models.',
        },
      ],
    },
    // AboutMe
    aboutMe: {
      badge: 'Who is behind this?',
      title: 'Your partner on equal footing',
      paragraph1: 'Hello, I\'m Diana. I know that the digital world can be intimidating for many small and micro businesses at first. Unclear costs, complicated technical terms, and anonymous agencies often make the first step difficult.',
      paragraph2: 'That\'s exactly why I founded Design by Diana. My goal is to be your partner by your side who makes complicated technology simple. I personally accompany you from the first draft of your "digital business card" to the finished SEO optimization.',
      quote: 'I stand for quality, fair models without lock-in contracts, and real personal accessibility. If you have questions, you call me – no call center, no waiting line.',
      paragraph3: 'Whether it\'s a craft business, small café, or up-and-coming startup: You deserve a web presence that reflects you and delights your customers. Let\'s take the step into digitalization together – motivated, honest, and successful.',
      cta: 'Get to know me',
      whatsappMessage: 'Hello Diana, I would like to get to know you and learn more about a website project!',
    },
    // SorglosPaket
    sorglosPaket: {
      title: 'The Carefree Package:',
      titleHighlight: 'You work, I take care of it.',
      description: 'No desire for updates, security gaps, or complicated technology? My USP is your advantage: I take over complete maintenance.',
      items: [
        'Regular security updates',
        'Backup management (backup of your data)',
        'Small text & image changes included',
        'Personal availability for questions',
        'Maximum protection against cyber attacks',
      ],
      cardTitle: '100% Technology-Free',
      cardQuote: '"Diana is like an employee I only pay when I need her – just cheaper!"',
      cardInclusive: 'Included',
      cardSubtext: 'in every maintenance contract',
    },
    // Pricing
    pricing: {
      title: 'Fair prices without traps',
      subtitle: 'No long lock-in contracts. Cancelable monthly, honestly calculated.',
      plans: [
        {
          name: 'Standard Package',
          setupPrice: 'from €499',
          monthlyPrice: '€49',
          description: 'The ideal digital start for micro businesses.',
          features: [
            'Custom web design (1-3 pages)',
            'Mobile-optimized (responsive)',
            'Basic SEO optimization',
            'Contact form & Google Maps',
            'Personal consultation',
            'Maintenance & security incl.',
          ],
        },
        {
          name: 'Business Premium',
          setupPrice: 'from €699',
          monthlyPrice: '€69',
          description: 'More power and features for your growth.',
          recommended: true,
          features: [
            'Comprehensive design (up to 7 pages)',
            'Online appointment booking system',
            'Advanced SEO strategy',
            'Blog or news section',
            'Priority support (express)',
            'Maintenance & security incl.',
          ],
        },
      ],
      recommended: 'Most Popular Choice',
      setup: 'Setup',
      monthly: '/ month maintenance',
      cta: 'Request plan',
      trust: 'Already over 40 small businesses trust Diana.',
      cancelable: 'Cancelable monthly',
      whatsappMessage: 'Hello Diana, I am interested in the {planName} and would like to learn more about it!',
    },
    // Contact
    contact: {
      title: 'Free design draft',
      subtitle: 'I will create a non-binding first sample of your new website.',
      branchPlaceholder: 'Industry (e.g., Coaching)',
      pagesLabel: 'Number of pages',
      pagesOptions: {
        placeholder: 'Number of pages',
        one: 'One-Page (1 page)',
        twoThree: '2 to 3 pages',
        fourSeven: '4 to 7 pages',
        eightPlus: 'More than 7 pages',
      },
      emailPlaceholder: 'Your email address',
      submit: 'Request my free website sample now',
      processing: 'Personal processing within 24h',
    },
    // Footer
    footer: {
      description: 'Your partner for digitalization on equal footing. I help small businesses take the digital step – with heart and mind.',
      navigation: 'Navigation',
      legal: 'Legal',
      impressum: 'Imprint',
      datenschutz: 'Privacy Policy',
      agb: 'Terms & Conditions',
      widerruf: 'Cancellation',
      copyright: 'All rights reserved.',
    },
    // WhatsApp Button
    whatsapp: {
      tooltip: 'Questions? Write me!',
      message: 'Hello Diana, I saw your website and I\'m interested in a free sample!',
    },
    // Legal
    legal: {
      impressum: 'Imprint (Legal Notice)',
      datenschutz: 'Privacy Policy',
      // Add more legal translations as needed
    },
  },
  es: {
    // Navbar
    nav: {
      startseite: 'Inicio',
      leistungen: 'Servicios',
      preismodelle: 'Precios',
      überMich: 'Sobre mí',
      jetztStarten: 'Empezar',
    },
    // Hero
    hero: {
      badge: 'Digitalización hecha simple',
      title: 'Tu Negocio.',
      titleHighlight: 'Digital. Personal.',
      description: 'Ayudo a pequeñas empresas a dar el paso al mundo digital. Honesto, personal y sin jerga complicada.',
      ctaPrimary: 'Solicitar presupuesto',
      ctaSecondary: 'Servicios',
    },
    // Services
    services: {
      title: 'Todo lo que tu negocio necesita',
      subtitle: 'Desde el primer píxel hasta el producto impreso terminado – te acompaño en cada paso.',
      items: [
        {
          title: 'Diseño Web Moderno',
          description: 'Sitios web optimizados para móviles que brillan en cada dispositivo e impresionan a tus clientes.',
        },
        {
          title: 'Landing Pages de Alta Gama',
          description: 'Páginas de destino exclusivas, optimizadas psicológicamente para ventas, que posicionan tu marca en el segmento premium y convierten visitantes en clientes leales mediante un diseño inteligente.',
        },
        {
          title: 'Optimización SEO',
          description: '¡Que te encuentren! Me encargo de la optimización básica necesaria para que Google te ame.',
        },
        {
          title: 'Branding & Logo',
          description: 'Un rostro distintivo para tu negocio. Desde logotipos hasta esquemas de color.',
        },
        {
          title: 'Medios Impresos',
          description: 'Tarjetas de visita, folletos y brochures. Diseño de alta calidad que puedes tocar.',
        },
        {
          title: 'Asesoramiento Honesto',
          description: 'Estoy a tu lado como socia y te ayudo con contratos y modelos justos.',
        },
      ],
    },
    // AboutMe
    aboutMe: {
      badge: '¿Quién está detrás?',
      title: 'Tu socia en igualdad de condiciones',
      paragraph1: 'Hola, soy Diana. Sé que el mundo digital puede ser intimidante para muchas pequeñas y microempresas al principio. Costos poco claros, términos técnicos complicados y agencias anónimas a menudo hacen difícil el primer paso.',
      paragraph2: 'Por eso fundé Design by Diana. Mi objetivo es ser tu socia a tu lado que hace que la tecnología complicada sea simple. Te acompaño personalmente desde el primer borrador de tu "tarjeta de visita digital" hasta la optimización SEO terminada.',
      quote: 'Apuesto por la calidad, modelos justos sin contratos de permanencia y una accesibilidad personal real. Si tienes preguntas, me llamas – sin centro de llamadas, sin línea de espera.',
      paragraph3: 'Ya sea un negocio artesanal, un pequeño café o una startup emergente: Te mereces una presencia web que te refleje y deleite a tus clientes. Demos juntos el paso hacia la digitalización – motivados, honestos y exitosos.',
      cta: 'Conocerme',
      whatsappMessage: '¡Hola Diana, me gustaría conocerte y saber más sobre un proyecto de sitio web!',
    },
    // SorglosPaket
    sorglosPaket: {
      title: 'El Paquete Sin Preocupaciones:',
      titleHighlight: 'Tú trabajas, yo me encargo.',
      description: '¿Sin ganas de actualizaciones, brechas de seguridad o tecnología complicada? Mi USP es tu ventaja: Me encargo del mantenimiento completo.',
      items: [
        'Actualizaciones de seguridad regulares',
        'Gestión de respaldos (respaldo de tus datos)',
        'Pequeños cambios de texto e imágenes incluidos',
        'Disponibilidad personal para preguntas',
        'Protección máxima contra ciberataques',
      ],
      cardTitle: '100% Libre de Tecnología',
      cardQuote: '"¡Diana es como una empleada que solo pago cuando la necesito – solo más barata!"',
      cardInclusive: 'Incluido',
      cardSubtext: 'en cada contrato de mantenimiento',
    },
    // Pricing
    pricing: {
      title: 'Precios justos sin trampas',
      subtitle: 'Sin contratos de permanencia largos. Cancelable mensualmente, calculado honestamente.',
      plans: [
        {
          name: 'Paquete Estándar',
          setupPrice: 'desde 499 €',
          monthlyPrice: '49 €',
          description: 'El inicio digital ideal para microempresas.',
          features: [
            'Diseño web personalizado (1-3 páginas)',
            'Optimizado para móviles (responsive)',
            'Optimización SEO básica',
            'Formulario de contacto y Google Maps',
            'Asesoramiento personal',
            'Mantenimiento y seguridad incl.',
          ],
        },
        {
          name: 'Business Premium',
          setupPrice: 'desde 699 €',
          monthlyPrice: '69 €',
          description: 'Más potencia y funciones para tu crecimiento.',
          recommended: true,
          features: [
            'Diseño completo (hasta 7 páginas)',
            'Sistema de reserva de citas online',
            'Estrategia SEO avanzada',
            'Sección de blog o noticias',
            'Soporte prioritario (express)',
            'Mantenimiento y seguridad incl.',
          ],
        },
      ],
      recommended: 'Opción Más Popular',
      setup: 'Configuración',
      monthly: '/ mes mantenimiento',
      cta: 'Solicitar plan',
      trust: 'Ya más de 40 pequeñas empresas confían en Diana.',
      cancelable: 'Cancelable mensualmente',
      whatsappMessage: '¡Hola Diana, estoy interesado en el {planName} y me gustaría saber más sobre él!',
    },
    // Contact
    contact: {
      title: 'Borrador de diseño gratis',
      subtitle: 'Te crearé una muestra inicial no vinculante de tu nuevo sitio web.',
      branchPlaceholder: 'Industria (ej., Coaching)',
      pagesLabel: 'Número de páginas',
      pagesOptions: {
        placeholder: 'Número de páginas',
        one: 'One-Page (1 página)',
        twoThree: '2 a 3 páginas',
        fourSeven: '4 a 7 páginas',
        eightPlus: 'Más de 7 páginas',
      },
      emailPlaceholder: 'Tu dirección de correo electrónico',
      submit: 'Solicitar mi muestra de sitio web gratis ahora',
      processing: 'Procesamiento personal en 24h',
    },
    // Footer
    footer: {
      description: 'Tu socia para la digitalización en igualdad de condiciones. Ayudo a pequeñas empresas a dar el paso digital – con corazón y mente.',
      navigation: 'Navegación',
      legal: 'Legal',
      impressum: 'Aviso Legal',
      datenschutz: 'Política de Privacidad',
      agb: 'Términos y Condiciones',
      widerruf: 'Cancelación',
      copyright: 'Todos los derechos reservados.',
    },
    // WhatsApp Button
    whatsapp: {
      tooltip: '¿Preguntas? ¡Escríbeme!',
      message: '¡Hola Diana, vi tu sitio web y estoy interesado en una muestra gratis!',
    },
    // Legal
    legal: {
      impressum: 'Aviso Legal',
      datenschutz: 'Política de Privacidad',
      // Add more legal translations as needed
    },
  },
};

export const getTranslation = (lang: Language, key: string): any => {
  const keys = key.split('.');
  let value: any = translations[lang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value;
};
