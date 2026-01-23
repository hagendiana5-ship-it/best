import React from 'react';

interface LegalProps {
  currentLang: 'de' | 'en' | 'es';
}

const content = {
  de: {
    imprintTitle: "Impressum (Aviso Legal)",
    privacyTitle: "Datenschutz (Privacidad)",
    infoTitle: "Angaben gemäß LSSI-CE",
    taxTitle: "Steuernummer (NIF/NIE)",
    contactTitle: "Kontakt",
    hostingTitle: "Hosting & Sicherheit",
    hostingDesc: "Diese Website wird bei einem externen Dienstleister gehostet. Wir setzen SSL-Verschlüsselung ein.",
    note: "Hinweis: Diese Dokumente wurden gemäß spanischer (LSSI-CE) und europäischer (RGPD) Gesetzgebung erstellt.",
    address: "Diana Hagen\nDesign by Diana\nC/alameda del mar\n29603 Marbella, Spanien"
  },
  en: {
    imprintTitle: "Imprint (Legal Notice)",
    privacyTitle: "Privacy Policy",
    infoTitle: "Information according to LSSI-CE",
    taxTitle: "Tax ID (NIF/NIE)",
    contactTitle: "Contact",
    hostingTitle: "Hosting & Security",
    hostingDesc: "This website is hosted by an external service provider. We use SSL encryption.",
    note: "Note: These documents were created in accordance with Spanish (LSSI-CE) and European (RGPD) legislation.",
    address: "Diana Hagen\nDesign by Diana\nC/alameda del mar\n29603 Marbella, Spain"
  },
  es: {
    imprintTitle: "Aviso Legal",
    privacyTitle: "Política de Privacidad",
    infoTitle: "Información según LSSI-CE",
    taxTitle: "NIF/NIE",
    contactTitle: "Contacto",
    hostingTitle: "Hosting y Seguridad",
    hostingDesc: "Este sitio web está alojado por un proveedor de servicios externo. Utilizamos cifrado SSL.",
    note: "Nota: Estos documentos han sido elaborados según la legislación española (LSSI-CE) y europea (RGPD).",
    address: "Diana Hagen\nDesign by Diana\nC/alameda del mar\n29603 Marbella, España"
  }
};

const Legal: React.FC<LegalProps> = ({ currentLang }) => {
  const t = content[currentLang];

  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="space-y-24">
        {/* Impressum Section */}
        <section id="impressum">
          <h1 className="text-5xl font-black mb-12 text-white tracking-tighter">{t.imprintTitle}</h1>
          <div className="space-y-8 text-gray-300 font-light leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-widest text-sm">{t.infoTitle}</h2>
              <p className="text-lg whitespace-pre-line">
                <strong>{t.address}</strong>
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-widest text-sm">{t.taxTitle}</h2>
                <p>Y2607181F</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-widest text-sm">{t.contactTitle}</h2>
                <p>E-Mail: info@design-by-diana.com<br />
                Website: www.design-by-diana.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section id="datenschutz">
          <h1 className="text-5xl font-black mb-12 text-white tracking-tighter">{t.privacyTitle}</h1>
          <div className="space-y-12 text-gray-400 font-light leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{t.hostingTitle}</h2>
              <p>{t.hostingDesc}</p>
            </div>

            <div className="p-10 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md">
              <p className="text-sm font-medium text-gray-400 italic">
                {t.note}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Legal;