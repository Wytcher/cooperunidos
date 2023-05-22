import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Comprador } from 'src/app/_model/compradores/comprador.model';
import { CompradoresService } from 'src/app/_service/compradores/compradores.service';

@Component({
  selector: 'app-compradores',
  templateUrl: './compradores.component.html',
  styleUrls: ['./compradores.component.css'],
})
export class CompradoresComponent implements OnInit {
  buyers: Comprador[] = [];

  constructor(
    private buyerService: CompradoresService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadBuyers();
  }

  loadBuyers() {
    this.buyerService.getBuyers().subscribe({
      next: (data) => {
        this.buyers = data.mensagem;
      },
      error: (error) => {
        if (error) {
          this.toastr.error(
            'Ocorreu um erro ao carregar os compradores, entre em contato com os administradores',
            'Erro interno'
          );
        }
      }
    });
  }

  deleteBuyer(id: number) {
    if(window.confirm('Você tem certeza que deseja deletar esse comprador?')) {
      console.log(id)
      this.buyerService.deleteBuyer(id).subscribe({
        next: (data) => {
          if (data) {
            this.toastr.success('Comprador deletado com sucesso', 'Sucesso ao deletar')
          }
        },
        error: (error) => {
          if (error) {
            this.toastr.error(
              'Ocorreu um erro ao deletar o comprador, entre em contato com os administradores',
              'Erro interno'
            );
          }
        }
      })
    }
  }
}
