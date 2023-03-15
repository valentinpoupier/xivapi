import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoreComponent } from './home-lore.component';

describe('HomeLoreComponent', () => {
  let component: HomeLoreComponent;
  let fixture: ComponentFixture<HomeLoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
