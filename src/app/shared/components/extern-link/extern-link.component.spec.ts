import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternLinkComponent } from './extern-link.component';

describe('ExternLinkComponent', () => {
  let component: ExternLinkComponent;
  let fixture: ComponentFixture<ExternLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
