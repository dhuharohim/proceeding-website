import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
  constructor(private router: Router) { }

  announcements = [
    {
      id: 1,
      title: 'CALL FOR PAPER Vol. 10 No. 2 year 2023',
      date: '2023-03-03',
      deadline: 'June 30, 2023',
      published: 'October 2023',
      criteria: [
        'Manuscript should be written in English',
        'Manuscript submitted must be original scientific writings and do not contain elements of plagiarism',
        'It reports a worthwhile contribution to legal studies,',
        'Sound methodology was used and is explained with sufficient detail so that other researchers can conduct further studies',
        'Conclusions are supported by well-analysed legal arguments',
        'Manuscripts is concise, well written, and understandable.',
        'BLJ uses the Chicago Manual of Stylein the References at the end of the manuscript. Cite only items that you have read and written on footnotes. Please use Reference Manager Applications like EndNote, Mendeley, Zotero, etc.',
        'Please read and understand the author',
        'Please use BLJ Article template (download here)',
      ],
      desc: 'We are delighted to announce that Brawijaya Law Journal, Faculty of Law Universitas Brawijaya will publish Journal Volume 10 No 2 (2023) : "Current Challenges, Developments and Events in The International Law"',

    },
    {
      id: 2,
      title: 'CALL FOR PAPER Vol. 10 No.1 year 2023',
      date: '2023-01-17',
      deadline: 'June 30, 2023',
      published: 'October 2023',
      criteria: [
        'Manuscript should be written in English',
        'Manuscript submitted must be original scientific writings and do not contain elements of plagiarism',
        'It reports a worthwhile contribution to legal studies,',
        'Sound methodology was used and is explained with sufficient detail so that other researchers can conduct further studies',
        'Conclusions are supported by well-analysed legal arguments',
        'Manuscripts is concise, well written, and understandable.',
        'BLJ uses the Chicago Manual of Stylein the References at the end of the manuscript. Cite only items that you have read and written on footnotes. Please use Reference Manager Applications like EndNote, Mendeley, Zotero, etc.',
        'Please read and understand the author',
        'Please use BLJ Article template (download here)',
      ],
      desc: 'We are delighted to announce that Brawijaya Law Journal, Faculty of Law Universitas Brawijaya will publish Journal Volume 10 No 1 (2023) : "The Discourse of Civil and Political Rights in Theory and Practice"'
    },
  ];
  viewAnnounce(announcement: any) {
    this.router.navigate(['/announcement/view', announcement.id], { state: { announcement } });
  }
}
