import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Journal } from 'src/app/shared/model/journal.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  currentUrlRoute : any;
  journals: any = Journal;
  @ViewChild('focus') focus!: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
    ) { }

  ngOnInit() {
    const currentUrl = this.router.routerState.snapshot.url;
    const segments = currentUrl.split('?');
    this.currentUrlRoute = segments[0];
    this.getData();
  }
  navigateTo(event: string) {
      if(event === 'author-guidelines') {
        const queryParams = { key: event };
        this.router.navigate(['/submission'], { queryParams: queryParams });
        setTimeout(() => {
          const currentUrl = this.router.url;
          const segments = currentUrl.split('?');
          const routeWithoutQueryParams = segments[0];
          this.router.navigateByUrl(routeWithoutQueryParams);
        }, 500);
      } else {
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

  getData() {
    try {
      this.apiService.getData('Journal data')
        .then(res => {
          const data = res?.data;
          console.log(data.name);

          this.journals = [
            { name: data.name, description: ''}
          ]
          console.log(this.journals);

        })
        .catch(error => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }


}

