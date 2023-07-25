import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotfolioComponent } from './potfolio.component';

describe('PotfolioComponent', () => {
  let component: PotfolioComponent;
  let fixture: ComponentFixture<PotfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PotfolioComponent]
    });
    fixture = TestBed.createComponent(PotfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
