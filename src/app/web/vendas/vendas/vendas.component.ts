import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Venda } from 'src/app/_model/vendas/venda.model';
import { VendasService } from 'src/app/_service/vendas/vendas.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css'],
})
export class VendasComponent implements OnInit {
  sales: Venda[] = [];

  constructor(
    private salesService: VendasService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadSales();
  }

  loadSales() {
    this.salesService.getSales().subscribe({
      next: (data) => {
        this.sales = data.mensagem;
      },
      error: (error) => {
        if (error) {
          this.toastr.error(
            'Ocorreu um erro ao carregar as vendas, entre em contato com os administradores',
            'Erro interno'
          );
        }
      },
    });
  }
}
