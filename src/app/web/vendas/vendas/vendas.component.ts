import { Component, OnInit } from '@angular/core';
import { Venda } from 'src/app/_model/vendas/venda.model';
import { VendasService } from 'src/app/_service/vendas/vendas.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {
  sales: Venda[] = []

  constructor(private salesService: VendasService) { }

  ngOnInit(): void {
    this.loadSales()
  }

  loadSales() {
    this.salesService.getSales().subscribe((data) => {
      this.sales = data[0]
    })
  }
}
