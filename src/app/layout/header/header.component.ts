import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeLink = '';

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.activeLink = data['isActive'];
    });
  }
}
