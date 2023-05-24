import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Insumo } from 'src/app/_model/insumos/insumo.model';
import { InsumosService } from 'src/app/_service/insumos/insumos.service';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css'],
})
export class InsumosComponent implements OnInit {
  supplies: Insumo[] = [];

  constructor(
    private supplieService: InsumosService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadSupplies();
  }

  loadSupplies() {
    this.supplieService.getSupplies().subscribe({
      next: (data) => {
        if (data.status_code === 404) {
          this.toastr.info(
            'Não há insumos cadastrados',
            'Informação'
          );
          return;
        }
        this.supplies = data.mensagem;
      },
      error: (error) => {
        if (error.status === 404) {
          this.toastr.info(
            'Não há insumos cadastrados',
            'Informação'
          );
          return;
        }
        if (error) {
          this.toastr.error(
            'Ocorreu um erro ao carregar os insumos, entre em contato com os administradores',
            'Erro interno'
          );
        }
      }
    });
  }

  deleteSupplie(id: number) {
    if(window.confirm('Você tem certeza que deseja deletar esse Insumo?')) {
      this.supplieService.deleteSupplie(id).subscribe({
        next: (data) => {
          if (data) {
            this.toastr.success('Insumo deletado com sucesso', 'Sucesso ao deletar')
          }
          setInterval(() => {window.location.reload()}, 2000)
        },
        error: (error) => {
          if (error) {
            this.toastr.error(
              'Ocorreu um erro ao deletar o Insumo, entre em contato com os administradores',
              'Erro interno'
            );
          }
        }
      })
    }
  }
}
