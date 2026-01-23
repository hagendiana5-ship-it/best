
import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="space-y-24">
        {/* Impressum Section */}
        <section id="impressum">
          <h1 className="text-5xl font-black mb-12 text-white tracking-tighter">Impressum (Aviso Legal)</h1>
          <div className="space-y-8 text-gray-300 font-light leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-widest text-sm">Angaben gemäß LSSI-CE</h2>
              <p className="text-lg">
                <strong>Diana Hagen</strong><br />
                Design by Diana<br />
                C/alameda del mar<br />
                29603 Marbella, Spanien
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-widest text-sm">Steuernummer (NIF/NIE)</h2>
                <p>Y2607181F</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-widest text-sm">Kontakt</h2>
                <p>E-Mail: info@design-by-diana.com<br />
                Website: www.design-by-diana.com</p>
              </div>
            </div>

            <div className="pt-10 border-t border-white/5 space-y-6">
              <h3 className="text-2xl font-bold text-white">Haftungsausschluss</h3>
              <div>
                <h4 className="text-white font-bold mb-2">Inhalte des Onlineangebotes</h4>
                <p>Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Verweise und Links</h4>
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Urheberrecht</h4>
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung von Diana Hagen. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section id="datenschutz" className="pt-24 border-t border-white/5">
          <h1 className="text-5xl font-black mb-12 text-white tracking-tighter">Datenschutzerklärung</h1>
          <div className="space-y-10 text-gray-300 font-light leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information über die Erhebung personenbezogener Daten</h2>
              <p>Im Folgenden informieren wir über die Erhebung personenbezogener Daten bei Nutzung unserer Website. Personenbezogene Daten sind alle Daten, die auf Sie persönlich beziehbar sind, z. B. Name, Adresse, E-Mail-Adressen, Nutzerverhalten.</p>
              <p className="mt-4">Verantwortlicher gemäß Art. 4 Abs. 7 EU-Datenschutz-Grundverordnung (DSGVO / RGPD) ist <strong>Diana Hagen</strong> (siehe Impressum).</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Ihre Rechte</h2>
              <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung oder Löschung (Art. 16 & 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              </ul>
              <p className="mt-4">Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde (in Spanien: AEPD - Agencia Española de Protección de Datos) über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Erhebung personenbezogener Daten bei Besuch unserer Website</h2>
              <p>Bei der bloß informatorischen Nutzung der Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur die personenbezogenen Daten, die Ihr Browser an unseren Server übermittelt. Dazu gehören u.a. IP-Adresse, Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur GMT, Inhalt der Anforderung, Zugriffsstatus/HTTP-Statuscode und die jeweils übertragene Datenmenge.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Hosting & Sicherheit</h2>
              <p>Diese Website wird bei einem externen Dienstleister gehostet. Die erhobenen Daten werden auf den Servern des Hosters gespeichert. Wir setzen SSL-Verschlüsselung ein, um die Sicherheit Ihrer Daten bei der Übertragung zu gewährleisten.</p>
            </div>

            <div className="p-10 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md">
              <p className="text-sm font-medium text-gray-400 italic">
                Hinweis für Nutzer: Diese Dokumente wurden nach bestem Wissen gemäß der spanischen (LSSI-CE, LOPDGDD) und europäischen (RGPD) Gesetzgebung erstellt. Bei rechtlichen Unklarheiten empfehlen wir die Konsultation eines spezialisierten Rechtsanwalts.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Legal;
