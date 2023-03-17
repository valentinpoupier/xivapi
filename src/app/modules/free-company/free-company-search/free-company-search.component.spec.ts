import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCompanySearchComponent } from './free-company-search.component';

describe('FreeCompanySearchComponent', () => {
  let component: FreeCompanySearchComponent;
  let fixture: ComponentFixture<FreeCompanySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeCompanySearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeCompanySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
