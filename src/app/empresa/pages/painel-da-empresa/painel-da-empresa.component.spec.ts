import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelDaEmpresaComponent } from './painel-da-empresa.component';

describe('PainelDaEmpresaComponent', () => {
  let component: PainelDaEmpresaComponent;
  let fixture: ComponentFixture<PainelDaEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelDaEmpresaComponent]
    });
    fixture = TestBed.createComponent(PainelDaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
