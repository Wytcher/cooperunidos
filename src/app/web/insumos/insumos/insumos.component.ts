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
        this.supplies = data.mensagem;
      },
      error: (error) => {
        if (error) {
          this.toastr.error(
            'Ocorreu um erro ao carregar os insumos, entre em contato com os administradores',
            'Erro interno'
          );
        }
      }
    });
  }
}
