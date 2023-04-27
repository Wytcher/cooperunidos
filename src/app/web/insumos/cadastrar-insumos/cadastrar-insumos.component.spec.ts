import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarInsumosComponent } from './cadastrar-insumos.component';

describe('CadastrarInsumosComponent', () => {
  let component: CadastrarInsumosComponent;
  let fixture: ComponentFixture<CadastrarInsumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarInsumosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
