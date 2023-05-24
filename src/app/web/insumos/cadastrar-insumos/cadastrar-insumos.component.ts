import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Fornecedor } from 'src/app/_model/fornecedores/fornecedor.model';
import { FornecedoresService } from 'src/app/_service/fornecedores/fornecedores.service';
import { InsumosService } from 'src/app/_service/insumos/insumos.service';

@Component({
  selector: 'app-cadastrar-insumos',
  templateUrl: './cadastrar-insumos.component.html',
  styleUrls: ['./cadastrar-insumos.component.css'],
})
export class CadastrarInsumosComponent implements OnInit {
  supliers: Fornecedor[] = [];
  formData: FormGroup;

  constructor(
    private suplierService: FornecedoresService,
    private formBuilder: FormBuilder,
    private supplieService: InsumosService,
    private toastr: ToastrService
  ) {
    this.formData = this.formBuilder.group({
      id_fornecedor: '',
      nome_insumo: '',
    });
  }

  ngOnInit(): void {
    this.loadSupliers();
  }

  loadSupliers() {
    this.suplierService.getSupliers().subscribe((data) => {
      this.supliers = data.mensagem;
    });
  }

  onSubmit() {
    this.supplieService
      .createSupplies(this.formData.value)
      .subscribe({
        next: (data) => {
          if (data) {
            this.toastr.success(
              'Insumo cadastrado com sucesso',
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
