import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Comprador } from 'src/app/_model/compradores/comprador.model';
import { Insumo } from 'src/app/_model/insumos/insumo.model';
import { CompradoresService } from 'src/app/_service/compradores/compradores.service';
import { InsumosService } from 'src/app/_service/insumos/insumos.service';
import { VendasService } from 'src/app/_service/vendas/vendas.service';

@Component({
  selector: 'app-cadastrar-vendas',
  templateUrl: './cadastrar-vendas.component.html',
  styleUrls: ['./cadastrar-vendas.component.css'],
})
export class CadastrarVendasComponent implements OnInit {
  buyers: Comprador[] = [];
  supplies: Insumo[] = [];
  formData: FormGroup;

  constructor(
    private buyerService: CompradoresService,
    private suppliesService: InsumosService,
    private formBuilder: FormBuilder,
    private salesService: VendasService
  ) {
    this.formData = this.formBuilder.group({
      id_insumo: '',
      id_comprador: '',
      peso: '',
      responsavel: '',
      data_venda: '',
      valor: '',
    });
  }

  ngOnInit(): void {
    this.loadBuyersAndSupplies();
  }

  loadBuyersAndSupplies() {
    this.buyerService.getBuyers().subscribe((data) => {
      this.buyers = data[0];
    });
    this.suppliesService.getSupplies().subscribe((data) => {
      this.supplies = data[0];
    });
  }

  onSubmit() {
    this.formData
      .get('data_venda')
      ?.setValue(
        moment(this.formData.get('data_venda')?.value)
          .format('YYYY-MM-DDTHH:mm:ss')
      );

    this.salesService.createSale(this.formData.value).subscribe((data) => {
      console.log(data)
    })
  }
}
