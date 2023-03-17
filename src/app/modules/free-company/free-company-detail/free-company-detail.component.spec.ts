import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCompanyDetailComponent } from './free-company-detail.component';

describe('FreeCompanyDetailComponent', () => {
  let component: FreeCompanyDetailComponent;
  let fixture: ComponentFixture<FreeCompanyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeCompanyDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeCompanyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
