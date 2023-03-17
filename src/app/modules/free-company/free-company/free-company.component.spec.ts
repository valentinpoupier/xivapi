import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCompanyComponent } from './free-company.component';

describe('FreeCompanyComponent', () => {
  let component: FreeCompanyComponent;
  let fixture: ComponentFixture<FreeCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
