import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTicketsComponent } from './agregar-tickets.component';

describe('AgregarTicketsComponent', () => {
  let component: AgregarTicketsComponent;
  let fixture: ComponentFixture<AgregarTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
