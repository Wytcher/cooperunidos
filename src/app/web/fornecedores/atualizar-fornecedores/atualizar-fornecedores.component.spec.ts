import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarFornecedoresComponent } from './atualizar-fornecedores.component';

describe('CadastrarFornecedoresComponent', () => {
  let component: AtualizarFornecedoresComponent;
  let fixture: ComponentFixture<AtualizarFornecedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarFornecedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarFornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
