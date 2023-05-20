import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarCompradoresComponent } from './atualizar-compradores.component';

describe('CadastrarCompradoresComponent', () => {
  let component: AtualizarCompradoresComponent;
  let fixture: ComponentFixture<AtualizarCompradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarCompradoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarCompradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
