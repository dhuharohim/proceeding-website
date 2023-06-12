import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerReviewListComponent } from './peer-review-list.component';

describe('PeerReviewListComponent', () => {
  let component: PeerReviewListComponent;
  let fixture: ComponentFixture<PeerReviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeerReviewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeerReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
