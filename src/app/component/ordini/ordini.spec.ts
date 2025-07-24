import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ordini } from './ordini';

describe('Ordini', () => {
  let component: Ordini;
  let fixture: ComponentFixture<Ordini>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ordini]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ordini);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
