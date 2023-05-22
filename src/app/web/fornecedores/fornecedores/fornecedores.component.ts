import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Fornecedor } from 'src/app/_model/fornecedores/fornecedor.model';
import { FornecedoresService } from 'src/app/_service/fornecedores/fornecedores.service';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css'],
})
export class FornecedoresComponent implements OnInit {
  supliers: Fornecedor[] = [];

  constructor(
    private supplierService: FornecedoresService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadSupliers();
  }

  loadSupliers() {
    this.supplierService.getSupliers().subscribe({
      next: (data) => {
        this.supliers = data.mensagem;
      },
      error: (error) => {
        if (error) {
          this.toastr.error(
            'Ocorreu um erro ao carregar os fornecedores, entre em contato com os administradores',
            'Erro interno'
          );
        }
      }
    });
  }

  deleteSupplier(id: number) {
    if(window.confirm('Você tem certeza que deseja deletar esse Fornecedor?')) {
      console.log(id)
      this.supplierService.deleteSuplier(id).subscribe({
        next: (data) => {
          if (data) {
            this.toastr.success('Fornecedor deletado com sucesso', 'Sucesso ao deletar')
          }
        },
        error: (error) => {
          if (error) {
            this.toastr.error(
              'Ocorreu um erro ao deletar o Fornecedor, entre em contato com os administradores',
              'Erro interno'
            );
          }
        }
      })
    }
  }
}
