import { DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  edition : any;
  article : any;
  citationFormat: string = 'acm';
  dateFormat: any;
  accessNow: any;
  nowAccess: any;
  createdAt: any;
  fullUrl: string = window.location.href;
  @ViewChild('appendCitation', { static: true }) appendCitation!: ElementRef;

  constructor(private datePipe: DatePipe) {}

  getCurrentYear(): number {
    return new Date().getFullYear();
  }
  ngOnInit() {
    this.article = history.state.data;    
    this.edition = history.state.edition;
    this.createdAt = new Date(this.article.created_at);
    this.nowAccess = new Date();
    this.accessNow = this.datePipe.transform(this.nowAccess, 'dd MMM yyyy');
    this.dateFormat = this.datePipe.transform(this.createdAt, 'MMM, yyyy');
    this.changeFormat(this.citationFormat);
    
  }

  changeFormat(format: string) {
    
    if(format === 'acm') {
      this.appendCitation.nativeElement.innerHTML = 
      `${this.article.author}. ${this.article.year}. ${this.article.article_title}. <span style="font-style: italic;">Kamu Hukum Journal</span>. ${this.edition.volume}, ${this.edition.issue} 
      (${this.dateFormat}).
      `;
    } else if (format === 'acs') {
      this.appendCitation.nativeElement.innerHTML = 
      `${this.article.author}. ${this.article.article_title}. <span style="font-style: italic;">KHJ</span> <span style="font-weight:bold;">${this.article.year}</span>, ${this.edition.volume}.
      `;
    } else if (format === 'apa') {
      this.appendCitation.nativeElement.innerHTML = 
      `${this.article.author}. (${this.article.year}). ${this.article.article_title}. <span style="font-style: italic;">Kamu Hukum Journal</span>, ${this.edition.volume}(${this.edition.issue})
      . Retrieved from ${this.fullUrl}
      `;
    } else if (format === 'abnt') {
      this.appendCitation.nativeElement.innerHTML = 
      `<span style="text-transform: uppercase;">${this.article.author}</span>. ${this.article.article_title}. <span style="font-weight: bold;">Kamu Hukum Journal</span>, [S. l.], v.${this.edition.volume}, n.${this.edition.issue} 
      , ${this.article.year}. Disponível em: ${this.fullUrl}. Acesso em: ${this.accessNow}.
      `;
    } else if (format === 'chicago') {
      this.appendCitation.nativeElement.innerHTML = 
      `${this.article.author}. ${this.article.year}. "${this.article.article_title}". <span style="font-style: italic;">Kamu Hukum Journal</span> ${this.edition.volume} (${this.edition.issue})
      ${this.fullUrl}.
      `;
    } else if (format === 'harvard') {
      this.appendCitation.nativeElement.innerHTML = 
      `${this.article.author}. (${this.article.year}) "${this.article.article_title}". <span style="font-style: italic;">Kamu Hukum Journal</span>, ${this.edition.volume}(${this.edition.issue})
      . Available at: ${this.fullUrl} (Accessed: ${this.accessNow})
      `;
    } else if (format === 'ieee') {
      const dateIe = this.datePipe.transform(this.createdAt, 'MMM. yyyy');
      this.appendCitation.nativeElement.innerHTML = 
      `${this.article.author}, "${this.article.article_title}", <span style="font-style: italic;">KHJ</span>, vol. ${this.edition.volume}, no. ${this.edition.issue}, ${dateIe}.
      `;
    } else if (format === 'mla') {
      this.appendCitation.nativeElement.innerHTML = 
      `${this.article.author}. "${this.article.article_title}", <span style="font-style: italic;">Kamu Hukum Journal</span>, vol. ${this.edition.volume}, no. ${this.edition.issue}, ${this.dateFormat}, ${this.fullUrl}.
      `;
    } else if (format === 'turabian') {
      const dateTurabian = this.datePipe.transform(this.createdAt, 'MMMM dd, yyyy');
      const dateAccess = this.datePipe.transform(this.nowAccess, 'MMMM dd, yyyy');
      this.appendCitation.nativeElement.innerHTML = 
      `${this.article.author}. ${this.article.article_title}. <span style="font-style: italic;">Kamu Hukum Journal</span> ${this.edition.volume}, no. ${this.edition.issue} (${dateTurabian}). Accessed ${dateAccess}. ${this.fullUrl}.
      `;
    } else if (format === 'vancouver') {
      const dateVancouver = this.datePipe.transform(this.createdAt, 'yyyy MMM. dd');
      const dateAccess = this.datePipe.transform(this.createdAt, 'yyyy MMM. dd');
      this.appendCitation.nativeElement.innerHTML = 
      `${this.article.author}. ${this.article.article_title}. <span style="font-style: italic;">KHJ</span> [Internet]. ${dateVancouver} [cited ${dateAccess}];${this.edition.volume}(${this.edition.issue}). Available from: ${this.fullUrl}.
      `;
    } 
  }
}
