import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent {
  @ViewChild('author') author!: ElementRef;

  constructor(private route: ActivatedRoute) {}


  makeSubmissions = [
    {
      id: 1,
      title: 'The submission has not been previously published, nor is it before another journal for consideration (or an explanation has been provided in Comments to the Editor). It is up to the editorial board to decide upon acceptance.'
    },
    {
      id: 2,
      title: 'The submission file is in OpenOffice or Microsoft Word file format.'
    },
    {
      id: 3,
      title: "The submission article has been in accordance with BLJ's Guidelines, which is found in About the Journal. For reference, our reference uses The Chicago Manual of Style (CMS). Consult to: http://www.chicagomanualofstyle.org/tools_citationguide/citation-guide-1.html."
    },
    {
      id: 4,
      title: 'Any third-party-owned materials used have been identified with appropriate credit lines, and permission obtained from the copyright holder for all formats of the journal.'
    },
    {
      id: 5,
      title: 'The author declares the absence of any conflict of interest in this work.'
    },
    {
      id: 5,
      title: 'IMPORTANT NOTE: ' +

      'If English is not your first language, we appreciate it if your manuscript has passed the proofread process by a native or a trusted proofread institution. Do not forget to attach the proofread evidence to the supplementary file when making a submission. Otherwise, your manuscript will be delayed or even rejected after a preliminary review by the editorial team.'
    },
  ];

  ngAfterViewInit() {
    this.route.queryParams.subscribe(params => {
      const key = params['key']; // Mengambil nilai dari query params
      setTimeout(() => {
        this.scrollTo(key);
      }, 100);
    });
  }

  scrollTo(event: string) {
    if(event === 'author-guidelines') { 
      this.author.nativeElement.scrollIntoView({behavior: 'smooth'});
    }
  }
}
