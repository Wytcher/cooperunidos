import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarInsumosComponent } from './atualizar-insumos.component';

describe('CadastrarInsumosComponent', () => {
  let component: AtualizarInsumosComponent;
  let fixture: ComponentFixture<AtualizarInsumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarInsumosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
