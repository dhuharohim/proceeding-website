import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexingSitesComponent } from './indexing-sites.component';

describe('IndexingSitesComponent', () => {
  let component: IndexingSitesComponent;
  let fixture: ComponentFixture<IndexingSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexingSitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexingSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
