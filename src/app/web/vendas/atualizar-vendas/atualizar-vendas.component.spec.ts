import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarVendasComponent } from './atualizar-vendas.component';

describe('CadastrarVendasComponent', () => {
  let component: AtualizarVendasComponent;
  let fixture: ComponentFixture<AtualizarVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarVendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
