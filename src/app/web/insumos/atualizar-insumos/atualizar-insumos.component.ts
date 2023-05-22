import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fornecedor } from 'src/app/_model/fornecedores/fornecedor.model';
import { Insumo } from 'src/app/_model/insumos/insumo.model';
import { FornecedoresService } from 'src/app/_service/fornecedores/fornecedores.service';
import { InsumosService } from 'src/app/_service/insumos/insumos.service';

@Component({
  selector: 'app-cadastrar-insumos',
  templateUrl: './atualizar-insumos.component.html',
  styleUrls: ['./atualizar-insumos.component.css'],
})
export class AtualizarInsumosComponent implements OnInit {
  supliers: Fornecedor[] = [];
  formData: FormGroup;
  supplie: Insumo | undefined;

  constructor(
    private suplierService: FornecedoresService,
    private formBuilder: FormBuilder,
    private supplieService: InsumosService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {
    this.formData = this.formBuilder.group({
      id_fornecedor: '',
      nome_insumo: '',
    });
  }

  ngOnInit(): void {
    this.loadSupliers();
    this.route.params.subscribe((params) => {
      this.loadSuplie(params['id']);
    });
  }

  loadSupliers() {
    this.suplierService.getSupliers().subscribe((data) => {
      this.supliers = data.mensagem;
    });
  }

  loadSuplie(id: number) {
    this.supplieService.getSupplie(id).subscribe({
      next: (data) => {
        this.supplie = data.mensagem;
        this.formData
          .get('id_fornecedor')
          ?.setValue(this.supplie?.id_fornecedor);
        this.formData.get('nome_insumo')?.setValue(this.supplie?.nome_insumo);
      },
      error: (error) => {
        if (error) {
          this.toastr.error(
            'Ocorreu um erro ao carregar o insumo, entre em contato com os administradores',
            'Erro interno'
          );
        }
      },
    });
  }

  onSubmit() {
    this.supplieService
      .updateSupplies(this.supplie?.id!, this.formData.value)
      .subscribe({
        next: (data) => {
          if (data) {
            this.toastr.success(
              'Insumo atualizado com sucesso',
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
        },
      });
  }
}
