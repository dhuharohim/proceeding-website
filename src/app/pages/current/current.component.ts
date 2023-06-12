import { Component } from '@angular/core';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent {


  articles = [
    {
      id: 1,
      title: 'Expanding the Limitations of the Protection and Processing of Children’s Personal Data: An Overview of Current Regulations, Challenges, and Recommendations',
      author: 'Rudita Laode',
      university: 'Universitas Indonesia,  Indonesia',
      view: 28

    },
    {
      id: 2,
      title: 'Reformulation of Contractus Sui Generis Wage Arrangement of Work Agreement After Covid-19 Pandemic',
      author: 'Sihabudin Sihabudin',
      university: 'Lecture at Faculty of Law, Brawijaya University,  Indonesia',
      view: 20

    },
    {
      id: 3,
      title: 'Compensation for Citizens Due to Poor Public Service Delivery: Viewed From the Perspective of Civil Rights',
      author: 'Aries Harianto',
      university: 'Law Faculty - Jember University,  Indonesia',
      view: 34
    },
  ];

  generalArticles = [
    {
      id: 1,
      title: 'Responsibility of Iran on the MV Mercer Street Attack in International Law',
      author: 'Rudita Laode',
      university: 'Universitas Indonesia,  Indonesia',
      view: 68
    }
  ];

}
