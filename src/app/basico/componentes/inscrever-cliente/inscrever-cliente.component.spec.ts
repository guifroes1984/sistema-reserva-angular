import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscreverClienteComponent } from './inscrever-cliente.component';

describe('InscreverClienteComponent', () => {
  let component: InscreverClienteComponent;
  let fixture: ComponentFixture<InscreverClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscreverClienteComponent]
    });
    fixture = TestBed.createComponent(InscreverClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
