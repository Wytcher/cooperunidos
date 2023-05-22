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
    private fornecedorService: FornecedoresService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadSupliers();
  }

  loadSupliers() {
    this.fornecedorService.getSupliers().subscribe({
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
}
