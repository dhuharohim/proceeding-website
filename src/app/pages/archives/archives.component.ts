import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent {


  constructor(private router: Router) { }

  public archives: any = [];
  public isLoading: boolean = false;

  // archives = [
  //   {
  //     id: 1,
  //     title: 'The Discourse of Civil and Political Rights in Theory and Practice',
  //     author: 'Vol. 10 No. 1 (2023)',
  //     university: 'Universitas Indonesia,  Indonesia',
  //     abstract: "International Law implementation always faces challenges from state or non-state actors. A sovereign state reminds the major element in the International Law implementation and prevailing of international orders. Unfortunately, there are sovereign states that choose their agenda rather than international order. Those actions lead to several problems in the state's national security.",
  //     view: 28

  //   },
  //   {
  //     id: 2,
  //     title: 'Energy and Environmental Law',
  //     author: 'Vol. 9 No. 2 (2022)',
  //     university: 'Lecture at Faculty of Law, Brawijaya University,  Indonesia',
  //     abstract: 'This issue addresses how International law challenges affect national security. This Edition portrays seven different issues related to contemporary International Law and National Security.',
  //     view: 20
  //   },
  //   {
  //     id: 3,
  //     title: 'The Discourse of Civil and Political Rights in Theory and Practice',
  //     author: 'Vol. 10 No. 1 (2023)',
  //     university: 'Universitas Indonesia,  Indonesia',
  //     abstract: "International Law implementation always faces challenges from state or non-state actors. A sovereign state reminds the major element in the International Law implementation and prevailing of international orders. Unfortunately, there are sovereign states that choose their agenda rather than international order. Those actions lead to several problems in the state's national security.",
  //     view: 28

  //   },
  //   {
  //     id: 4,
  //     title: 'Energy and Environmental Law',
  //     author: 'Vol. 9 No. 2 (2022)',
  //     university: 'Lecture at Faculty of Law, Brawijaya University,  Indonesia',
  //     abstract: 'This issue addresses how International law challenges affect national security. This Edition portrays seven different issues related to contemporary International Law and National Security.',
  //     view: 20
  //   },
  // ];

  getData() {
    this.isLoading = true;

    const apiUrl = environment.apiUrl + '/edition/archieved'; // Mendapatkan URL dari environment dan menambahkan '/jurnals'
    axios.get(apiUrl)
    .then(response => {
      const responseData = response.data.data;

      console.log('data', responseData);

      if (Array.isArray(responseData)) {
        this.archives = responseData;
      } else {
        this.archives = [responseData];
      }
      this.isLoading = false;

    })
    .catch(error => {
      console.error('Failed to get data:', error);
      this.isLoading = false;

    });
  }

  ngOnInit() {
    this.getData();
  }

  goToView(archive: any) {
    this.getData(); // Memanggil fungsi getData untuk mendapatkan data terbaru
    this.router.navigate(['/archives/view', archive.id], { state: { archive } });
  }


}
