import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterClassjobComponent } from './character-classjob.component';

describe('CharacterClassjobComponent', () => {
  let component: CharacterClassjobComponent;
  let fixture: ComponentFixture<CharacterClassjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterClassjobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterClassjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
