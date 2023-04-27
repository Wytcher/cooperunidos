import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCompradoresComponent } from './cadastrar-compradores.component';

describe('CadastrarCompradoresComponent', () => {
  let component: CadastrarCompradoresComponent;
  let fixture: ComponentFixture<CadastrarCompradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCompradoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarCompradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
