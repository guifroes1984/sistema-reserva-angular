import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelDoClienteComponent } from './painel-do-cliente.component';

describe('PainelDoClienteComponent', () => {
  let component: PainelDoClienteComponent;
  let fixture: ComponentFixture<PainelDoClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelDoClienteComponent]
    });
    fixture = TestBed.createComponent(PainelDoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
