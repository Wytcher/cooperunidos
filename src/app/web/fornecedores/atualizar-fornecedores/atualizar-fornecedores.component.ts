import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fornecedor } from 'src/app/_model/fornecedores/fornecedor.model';
import { FornecedoresService } from 'src/app/_service/fornecedores/fornecedores.service';

@Component({
  selector: 'app-cadastrar-fornecedores',
  templateUrl: './atualizar-fornecedores.component.html',
  styleUrls: ['./atualizar-fornecedores.component.css'],
})
export class AtualizarFornecedoresComponent implements OnInit {
  createMessage: string | undefined;
  formData: FormGroup;
  suplier: Fornecedor | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private suplierService: FornecedoresService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {
    this.formData = this.formBuilder.group({
      nome: '',
      empresa: '',
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadSupplier(params['id'])
    })
  }

  loadSupplier(id: number) {
    this.suplierService.getSuplier(id).subscribe({
      next: (data) => {
        this.suplier = data.mensagem
        this.formData.get('nome')?.setValue(this.suplier?.nome)
        this.formData.get('empresa')?.setValue(this.suplier?.empresa)
      },
      error: (error) => {
        if (error) {
          this.toastr.error(
            'Ocorreu um erro ao carregar o fornecedor, entre em contato com os administradores',
            'Erro interno'
          );
        }
      }
    })
  }

  onSubmit() {
    this.suplierService
      .updateSuplier(this.suplier?.id!, this.formData.value)
      .subscribe({
        next: (data) => {
          if (data) {
            this.toastr.success(
              'Fornecedor atualizado com sucesso',
              'Sucesso ao atualizar'
            );
          }
        },
        error: (error) => {
          if (error.status === 422) {
            this.toastr.error(
              'Os campos estão incorretos, favor verificar.',
              'Erro ao atualizar'
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
