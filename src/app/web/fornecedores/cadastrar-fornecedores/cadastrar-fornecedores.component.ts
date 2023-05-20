import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FornecedoresService } from 'src/app/_service/fornecedores/fornecedores.service';

@Component({
  selector: 'app-cadastrar-fornecedores',
  templateUrl: './cadastrar-fornecedores.component.html',
  styleUrls: ['./cadastrar-fornecedores.component.css'],
})
export class CadastrarFornecedoresComponent implements OnInit {
  createMessage: string | undefined;
  formData: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private fornecedorService: FornecedoresService,
    private toastr: ToastrService
  ) {
    this.formData = this.formBuilder.group({
      nome: '',
      empresa: '',
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.fornecedorService
      .createSuplier(this.formData.value)
      .subscribe({
        next: (data) => {
          if (data) {
            this.toastr.success(
              'Fornecedor cadastrado com sucesso',
              'Sucesso ao cadastrar'
            );
          }
        },
        error: (error) => {
          if (error.status === 422) {
            this.toastr.error(
              'Os campos estão incorretos, favor verificar.',
              'Erro ao cadastrar'
            );
          }
          if (error.status === 500) {
            this.toastr.error(
              'Entre em contato com os administradores',
              'Erro interno'
            );
          }
        }
      });
  }
}
