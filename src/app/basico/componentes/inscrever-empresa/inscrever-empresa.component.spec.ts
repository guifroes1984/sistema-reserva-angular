import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscreverEmpresaComponent } from './inscrever-empresa.component';

describe('InscreverEmpresaComponent', () => {
  let component: InscreverEmpresaComponent;
  let fixture: ComponentFixture<InscreverEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscreverEmpresaComponent]
    });
    fixture = TestBed.createComponent(InscreverEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
