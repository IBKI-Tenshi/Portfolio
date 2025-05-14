import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  currentLang = 'en';

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  translations: any = {
    en: {
      heading: 'Privacy Policy',
      responsible: 'Responsible for this website:',
      general_info: 'General Information',
      general_info_text: 'The protection of your personal data is a special concern for me. I handle your personal data confidentially and in accordance with the legal data protection regulations as well as this privacy policy.',
      data_collection: 'Data Collection on this Website',
      server_log_files: '1. Server Log Files',
      server_log_files_text: 'When visiting this website, information is automatically collected by the provider and stored in server log files. These include:',
      ip_address: 'IP address',
      date_time_request: 'Date and time of request',
      requested_page: 'Requested page or file',
      referrer_url: 'Referrer URL (the previously visited page)',
      browser_type: 'Browser type and version',
      operating_system: 'Used operating system',
      server_log_info: 'This data serves technical monitoring, ensuring smooth operation, and security. No merging with other data sources takes place.',
      contact_form: '2. Contact Form',
      contact_form_text: 'If you use the contact form, the entered data (e.g. name, email address) is transmitted via email and stored for processing purposes. No forwarding to third parties occurs without your consent.',
      hosting: 'Hosting',
      hosting_info: 'This website is hosted by:<br>ALL-INKL.COM, Münnich, Hauptstraße 68, 02742 Friedersdorf',
      more_info: 'More information',
      external_services: 'Linking to External Services',
      linkedin: 'LinkedIn',
      linkedin_text: 'This website contains a link to my LinkedIn profile. Provider is LinkedIn Corporation, 1000 W Maude, Sunnyvale, CA 94085, USA.',
      linkedin_privacy: 'Privacy Policy',
      github: 'GitHub',
      github_text: 'Some projects link to GitHub repositories. Provider is GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA.',
      github_privacy: 'Privacy Policy',
      project_previews: 'Project Previews / External Hosting',
      project_previews_info: 'Projects linked in the portfolio may lead to externally hosted demo versions. The data protection regulations of the respective providers apply when accessing these sites.',
      fonts: 'Fonts',
      fonts_info: 'This website uses fonts from Google Fonts. The fonts are locally embedded, so no connection to Google servers is established.',
      your_rights: 'Your Rights',
      right_to_access: 'You have the right to request access to your personal data stored by me.',
      right_to_correct: 'You have the right to correct incorrect data.',
      right_to_delete: 'You have the right to request deletion of your data unless there is a legal obligation to retain it.',
      right_to_restrict: 'You have the right to restrict the processing of your data.',
      right_to_object: 'You have the right to object to the processing if it is based on legitimate interest.',
      right_to_withdraw_consent: 'You have the right to withdraw your consent at any time.',
      right_to_complain: 'You have the right to lodge a complaint with a supervisory authority.',
      changes: 'Changes to this Privacy Policy',
      changes_info: 'This privacy policy is currently valid and is up to date as of May 2025. It will be updated as necessary.'
    },
    de: {
      heading: 'Datenschutzerklärung',
      responsible: 'Verantwortlich für diese Website:',
      general_info: 'Allgemeine Hinweise',
      general_info_text: 'Der Schutz deiner persönlichen Daten ist mir ein besonderes Anliegen. Ich behandle deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
      data_collection: 'Datenerfassung auf dieser Website',
      server_log_files: '1. Server-Log-Dateien',
      server_log_files_text: 'Beim Besuch dieser Website werden automatisch Informationen durch den Provider erfasst und in sogenannten Server-Log-Dateien gespeichert. Dazu gehören:',
      ip_address: 'IP-Adresse',
      date_time_request: 'Datum und Uhrzeit der Anfrage',
      requested_page: 'Abgerufene Seite bzw. Datei',
      referrer_url: 'Referrer-URL (die zuvor besuchte Seite)',
      browser_type: 'Browsertyp und Browserversion',
      operating_system: 'Verwendetes Betriebssystem',
      server_log_info: 'Diese Daten dienen der technischen Überwachung, zur Gewährleistung eines reibungslosen Betriebs und zur Sicherheit. Eine Zusammenführung mit anderen Datenquellen erfolgt nicht.',
      contact_form: '2. Kontaktformular',
      contact_form_text: 'Wenn du das Kontaktformular nutzt, werden die dort eingegebenen Daten (z. B. Name, E-Mail-Adresse) per E-Mail an mich übermittelt und zum Zweck der Bearbeitung gespeichert. Eine Weitergabe an Dritte erfolgt nicht ohne deine Einwilligung.',
      hosting: 'Hosting',
      hosting_info: 'Diese Website wird gehostet bei:<br>ALL-INKL.COM, Münnich, Hauptstraße 68, 02742 Friedersdorf',
      more_info: 'Weitere Informationen',
      external_services: 'Verlinkung zu externen Diensten',
      linkedin: 'LinkedIn',
      linkedin_text: 'Auf dieser Website befindet sich ein Link zu meinem LinkedIn-Profil. Anbieter ist LinkedIn Corporation, 1000 W Maude, Sunnyvale, CA 94085, USA.',
      linkedin_privacy: 'Datenschutzerklärung',
      github: 'GitHub',
      github_text: 'Einige Projekte verlinken auf GitHub-Repositories. Anbieter ist GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA.',
      github_privacy: 'Datenschutzerklärung',
      project_previews: 'Projektvorschauen / Externes Hosting',
      project_previews_info: 'Im Portfolio verlinkte Projekte können zu extern gehosteten Demo-Versionen führen. Beim Aufruf dieser Seiten gelten die Datenschutzbestimmungen der jeweiligen Anbieter.',
      fonts: 'Schriftarten',
      fonts_info: 'Diese Website verwendet Schriftarten von Google Fonts. Die Fonts sind lokal eingebunden, sodass keine Verbindung zu Google-Servern hergestellt wird.',
      your_rights: 'Deine Rechte',
      right_to_access: 'Du hast das Recht, Auskunft über deine bei mir gespeicherten personenbezogenen Daten zu verlangen.',
      right_to_correct: 'Du hast das Recht, unrichtige Daten korrigieren zu lassen.',
      right_to_delete: 'Du hast das Recht, die Löschung deiner Daten zu verlangen, sofern keine gesetzliche Aufbewahrungspflicht besteht.',
      right_to_restrict: 'Du hast das Recht, die Verarbeitung deiner Daten einzuschränken.',
      right_to_object: 'Du hast das Recht, der Verarbeitung zu widersprechen, sofern sie auf berechtigtem Interesse beruht.',
      right_to_withdraw_consent: 'Du hast das Recht, eine erteilte Einwilligung jederzeit zu widerrufen.',
      right_to_complain: 'Du hast das Recht, dich bei einer Aufsichtsbehörde zu beschweren.',
      changes: 'Änderungen dieser Datenschutzerklärung',
      changes_info: 'Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2025. Bei Bedarf wird sie aktualisiert.'
    }
  };

  getText(key: string): string {
    return this.translations[this.currentLang][key];
  }
}
