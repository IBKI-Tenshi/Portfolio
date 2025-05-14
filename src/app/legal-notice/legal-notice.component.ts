import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  currentLang = 'en';

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  translations: any = {
    en: {
      heading: 'Legal Notice',
      address: 'Information according to § 5 TMG',
      contact: 'Contact',
      responsible: 'Responsible for content according to § 55 (2) RStV',
      liability_content: 'Liability for Content',
      liability_text: 'As a service provider, I am responsible for my own content on these pages in accordance with general laws...',
      liability_links: 'Liability for Links',
      links_text: 'My offer contains links to external third-party websites...',
      copyright: 'Copyright',
      copyright_text: 'The content and works created by the site operator on this website are subject to German copyright...',
      eu_dispute: 'EU Dispute Resolution',
      eu_dispute_text: 'The European Commission provides a platform for online dispute resolution (OS):',
      eu_dispute_notice: 'I am not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.'
    },
    de: {
      heading: 'Impressum',
      address: 'Angaben gemäß § 5 TMG',
      contact: 'Kontakt',
      responsible: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
      liability_content: 'Haftung für Inhalte',
      liability_text: 'Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich...',
      liability_links: 'Haftung für Links',
      links_text: 'Mein Angebot enthält Links zu externen Webseiten Dritter...',
      copyright: 'Urheberrecht',
      copyright_text: 'Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht...',
      eu_dispute: 'EU-Streitschlichtung',
      eu_dispute_text: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
      eu_dispute_notice: 'Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
    }
  };

  getText(key: string): string {
    return this.translations[this.currentLang][key];
  }
}
