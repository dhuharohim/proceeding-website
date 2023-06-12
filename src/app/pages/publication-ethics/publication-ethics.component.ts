import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-publication-ethics',
  templateUrl: './publication-ethics.component.html',
  styleUrls: ['./publication-ethics.component.scss']
})
export class PublicationEthicsComponent {
  currentUrlRoute : any;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private apiService: ApiService
    ) { }

  ngOnInit() {
    const currentUrl = this.router.routerState.snapshot.url;
    const segments = currentUrl.split('?');
    this.currentUrlRoute = segments[0];
  }
  navigateTo(event: string) {
    const queryParams = { key: event };
    this.router.navigate(['/about'], { queryParams: queryParams });
    setTimeout(() => {
      const currentUrl = this.router.url;
      const segments = currentUrl.split('?');
      const routeWithoutQueryParams = segments[0];
      this.router.navigateByUrl(routeWithoutQueryParams);
    }, 500);
  } 
}
