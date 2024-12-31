import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionCitasPage } from './gestioncitas.page';

describe('GestioncitasPage', () => {
  let component: GestionCitasPage;
  let fixture: ComponentFixture<GestionCitasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
