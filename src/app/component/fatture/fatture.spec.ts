import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fatture } from './fatture';

describe('Fatture', () => {
  let component: Fatture;
  let fixture: ComponentFixture<Fatture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Fatture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fatture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
