import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent {

  edition: any;

  constructor(private router: Router) { }



  ngOnInit() {
    this.getCurrentData();
  }
  async getCurrentData() {
    const apiUrl = environment.apiUrl;
    try {
      const res = await axios.get(`${apiUrl}/edition/current`)
      const data = res.data;
      this.edition = data.data;
      console.log(data);
      
    } catch (err) {

    }
  }

  viewArticle(edition:any , data: any) {
    this.router.navigate(['/current/view', data.slug], { state: { data, edition } });
  }
}
