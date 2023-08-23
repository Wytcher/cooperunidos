import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Comprador } from 'src/app/_model/compradores/comprador.model';
import { Insumo } from 'src/app/_model/insumos/insumo.model';
import { CompradoresService } from 'src/app/_service/compradores/compradores.service';
import { InsumosService } from 'src/app/_service/insumos/insumos.service';
import { VendasService } from 'src/app/_service/vendas/vendas.service';
import { ToastrService } from 'ngx-toastr';
import { Venda } from 'src/app/_model/vendas/venda.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastrar-vendas',
  templateUrl: './atualizar-vendas.component.html',
  styleUrls: ['./atualizar-vendas.component.css'],
})
export class AtualizarVendasComponent implements OnInit {
  buyers: Comprador[] = [];
  supplies: Insumo[] = [];
  formData: FormGroup;
  sale: Venda | undefined;

  constructor(
    private buyerService: CompradoresService,
    private suppliesService: InsumosService,
    private formBuilder: FormBuilder,
    private salesService: VendasService,
    private toastr: ToastrService,
    private route: ActivatedRoute
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
    this.route.params.subscribe(params => {
      this.loadSale(params['id'])
    })
  }

  loadBuyersAndSupplies() {
    this.buyerService.getBuyers().subscribe((data) => {
      this.buyers = data.mensagem;
    });
    this.suppliesService.getSupplies().subscribe((data) => {
      this.supplies = data.mensagem;
    });
  }

  loadSale(id: number) {
    this.salesService.getSale(id).subscribe({
      next: (data) => {
        this.sale = data.mensagem
        this.formData.get('id_insumo')?.setValue(this.sale?.id_insumo)
        this.formData.get('id_comprador')?.setValue(this.sale?.id_comprador)
        this.formData.get('peso')?.setValue(this.sale?.peso)
        this.formData.get('responsavel')?.setValue(this.sale?.responsavel)
        this.formData.get('data_venda')?.setValue(moment(this.sale?.data_venda).format(
          'DD/MM/YYYY'
        ))
        this.formData.get('valor')?.setValue(this.sale?.valor)
      },
      error: (error) => {
        if (error) {
          this.toastr.error(
            'Ocorreu um erro ao carregar a venda, entre em contato com os administradores',
            'Erro interno'
          );
        }
      }
    })
  }

  onSubmit() {
    this.formData
      .get('data_venda')
      ?.setValue(
        moment(this.formData.get('data_venda')?.value, 'DD/MM/YYYY').format(
          'YYYY-MM-DDTHH:mm:ss'
        )
      );

    this.salesService.updateSale(this.sale?.id!,this.formData.value).subscribe({
      next: (data) => {
        if (data) {
          this.toastr.success(
            'Venda atualizada com sucesso',
            'Sucesso ao atualizada'
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
