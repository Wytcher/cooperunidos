import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarVendasComponent } from './cadastrar-vendas.component';

describe('CadastrarVendasComponent', () => {
  let component: CadastrarVendasComponent;
  let fixture: ComponentFixture<CadastrarVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarVendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
