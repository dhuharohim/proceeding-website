import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  announcement: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);

      // Panggil metode getannouncementById dengan ID yang diterima
      // this.getannouncementById(id);
    });

    this.announcement = history.state.announcement;
    console.log(this.announcement);
  }
}
