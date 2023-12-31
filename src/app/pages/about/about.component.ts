import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('focus') focus!: ElementRef;
  @ViewChild('peer') peer!: ElementRef;
  @ViewChild('publication') publication!: ElementRef;
  @ViewChild('policy') policy!: ElementRef;
  @ViewChild('copyright') copyright!: ElementRef;
  @ViewChild('archiving') archiving!: ElementRef;
  @ViewChild('apcs') apcs!: ElementRef;
  @ViewChild('plagiarism') plagiarism!: ElementRef;
  @ViewChild('history') history!: ElementRef;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    // sidenav scrollTo
    this.route.queryParams.subscribe(params => {
      const key = params['key']; // Mengambil nilai dari query params
      setTimeout(() => {
        this.scrollTo(key);
      }, 100);
    });
    
  }

  scrollTo(event: string) {
    if(event === 'focus') { 
      this.focus.nativeElement.scrollIntoView({behavior: 'smooth'});
    } else if(event === 'peer' ) {
      this.peer.nativeElement.scrollIntoView({behavior: 'smooth'});
    } else if(event === 'publication' ) {
      this.publication.nativeElement.scrollIntoView({behavior: 'smooth'});
    } else if(event === 'policy' ) {
      this.policy.nativeElement.scrollIntoView({behavior: 'smooth'});
    } else if(event === 'copyright' ) {
      this.copyright.nativeElement.scrollIntoView({behavior: 'smooth'});
    } else if(event === 'archiving' ) {
      this.archiving.nativeElement.scrollIntoView({behavior: 'smooth'});
    } else if(event === 'apcs' ) {
      this.apcs.nativeElement.scrollIntoView({behavior: 'smooth'});
    } else if(event === 'plagiarism' ) {
      this.plagiarism.nativeElement.scrollIntoView({behavior: 'smooth'});
    } else if(event === 'history' ) {
      this.history.nativeElement.scrollIntoView({behavior: 'smooth'});
    }
  }
}
